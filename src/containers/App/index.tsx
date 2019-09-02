import React from "react";
import NavBar from "../../components/NavBar";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, Container, CssBaseline } from "@material-ui/core";
import environment from "../../relay/Environment";
import Loading from "../../components/Loading";
import { QueryRenderer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import ProductsList from "../../components/ProductsList";
import { AppQuery } from "./__generated__/AppQuery.graphql";

const myMtgShopTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#252627"
    },
    secondary: {
      main: "#4B88A2",
      light: "#A3D5FF"
    },
    error: {
      main: "#BB0A21"
    }
  }
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={myMtgShopTheme}>
      <QueryRenderer<AppQuery>
        environment={environment}
        query={AppViewerQuery}
        variables={{}}
        render={({ error, props }): React.ReactNode => {
          if (error) {
            return <div>Erro ao carregar produtos</div>;
          }
          if (!props) {
            return <Loading />;
          }
          return (
            <React.Fragment>
              <CssBaseline />
              <NavBar viewer={props.viewer} />
              <Container maxWidth="sm">
                <ProductsList
                  allProducts={props.viewer.allProducts as any}
                  shoppingCart={props.viewer.User!.shoppingCart as any}
                />
              </Container>
            </React.Fragment>
          );
        }}
      />
    </ThemeProvider>
  );
};

export default App;

const AppViewerQuery = graphql`
  query AppQuery {
    viewer {
      ...NavBar_viewer
      allProducts {
        ...ProductsList_allProducts
      }
      User(id: "cjzyfwspn0f1a01671todqxul") {
        shoppingCart {
          ...ProductsList_shoppingCart
        }
      }
    }
  }
`;

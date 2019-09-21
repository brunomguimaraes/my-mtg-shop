import React from "react";
import NavBar from "../../components/NavBar";
import { Container, CssBaseline } from "@material-ui/core";
import environment from "../../relay/Environment";
import Loading from "../../components/Loading";
import { QueryRenderer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import ProductsList from "../../components/ProductsList";
import { MainQuery } from "./__generated__/MainQuery.graphql";

const Main: React.FC = () => {
  return (
    <QueryRenderer<MainQuery>
      environment={environment}
      query={MainViewerQuery}
      variables={{}}
      render={({ error, props }): React.ReactNode => {
        console.log("Props:", props);
        if (error) {
          return <div>Erro ao carregar produtos</div>;
        }
        if (!props) {
          return <Loading />;
        }
        return (
          <React.Fragment>
            <CssBaseline />
            <NavBar user={props.user!} showCart={true} />
            <Container maxWidth="md">
              <ProductsList
                products={props as any}
                shoppingCart={props.user!.shoppingCart as any}
              />
            </Container>
          </React.Fragment>
        );
      }}
    />
  );
};

export default Main;

const MainViewerQuery = graphql`
  query MainQuery {
    ...ProductsList_products
    user(id: "35c96560-dca0-11e9-b5e6-6329846dbf80") {
      ...NavBar_user
      shoppingCart {
        ...ProductsList_shoppingCart
      }
    }
  }
`;

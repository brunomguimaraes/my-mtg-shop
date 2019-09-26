import React from "react";
import NavBar from "../../components/NavBar";
import { Container, CssBaseline } from "@material-ui/core";
import environment from "../../relay/Environment";
import Loading from "../../components/Loading";
import { QueryRenderer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import ProductsList from "../../components/ProductsList";
import { MainQuery } from "../../__generated__/MainQuery.graphql";

const Main: React.FC = () => {
  return (
    <QueryRenderer<MainQuery>
      environment={environment}
      query={MainViewerQuery}
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
            {props.user && <NavBar user={props.user} showCart={true} />}
            <Container maxWidth="md">
              {props.user && (
                <ProductsList
                  products={props}
                  shoppingCart={props.user.shoppingCart}
                />
              )}
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
    user(id: "e21b4d40-df18-11e9-8371-4d6e71ada4c9") {
      ...NavBar_user
      shoppingCart {
        ...ProductsList_shoppingCart
      }
    }
  }
`;

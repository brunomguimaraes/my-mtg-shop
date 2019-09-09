import React from "react";
import { graphql } from "babel-plugin-relay/macro";
import { QueryRenderer } from "react-relay";
import Loading from "../../components/Loading";
import environment from "../../relay/Environment";
import { CssBaseline, Container } from "@material-ui/core";
import NavBar from "../../components/NavBar";
import { CheckoutQuery } from "./__generated__/CheckoutQuery.graphql";
import CheckoutCard from "../../components/CheckoutCard";

const Checkout: React.FC = () => {
  return (
    <QueryRenderer<CheckoutQuery>
      environment={environment}
      query={CheckoutViewerQuery}
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
            <NavBar viewer={props.viewer} showCart={false} />
            <Container maxWidth="md">
              <CheckoutCard viewer={props.viewer} />
            </Container>
          </React.Fragment>
        );
      }}
    />
  );
};

export default Checkout;

const CheckoutViewerQuery = graphql`
  query CheckoutQuery {
    viewer {
      ...CheckoutCard_viewer
      ...NavBar_viewer
    }
  }
`;

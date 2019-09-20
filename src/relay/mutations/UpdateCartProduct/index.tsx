import { graphql } from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";
import environment from "../../Environment";

const mutation = graphql`
  mutation UpdateCartProductMutation($input: UpdateCartProductInput!) {
    updateCartProduct(input: $input) {
      quantityOnCart
      id
      product {
        name
        quantityInStock
      }
      shoppingCart {
        cartProducts {
          quantityOnCart
          product {
            name
            price
            quantityInStock
          }
        }
      }
    }
  }
`;

export const updateCartProduct = (id: string, quantityOnCart: number) => {
  const variables = {
    input: {
      id,
      quantityOnCart
    }
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {},
    onError: err => console.error(err)
  });
};

import { graphql } from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";
import environment from "../../Environment";

const mutation = graphql`
  mutation CreateCartProductMutation($input: CreateCartProductInput!) {
    createCartProduct(input: $input) {
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

export const createCartProduct = (
  quantityOnCart: number,
  productId: string,
  shoppingCartId: string
) => {
  const variables = {
    input: {
      quantityOnCart,
      productId,
      shoppingCartId
    }
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {},
    onError: err => console.error(err)
  });
};

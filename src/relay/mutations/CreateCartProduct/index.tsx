import { graphql } from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";
import environment from "../../Environment";

const mutation = graphql`
    mutation CreateCartProductMutation($input: CreateCartProductInput!) {
        createCartProduct(input: $input) {
            clientMutationId
            cartProduct {
                quantityOnCart
                id
                product {
                    name
                    quantityInStock
                }
            }
            shoppingCart {
                cartProducts {
                    count
                    edges {
                        node {
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
        }
    }
`;

export const createCartProduct = (
    clientMutationId: string,
    quantityOnCart: number,
    productId: string,
    shoppingCartId: string,
    quantityInStock: number
) => {
    const variables = {
        input: {
            clientMutationId,
            quantityOnCart,
            productId,
            shoppingCartId,
            product: {
                quantityInStock
            }
        }
    };

    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response, errors) => {
            console.log("Response received from server.");
        },
        onError: (err) => console.error(err)
    });
};

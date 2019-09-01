import { graphql } from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";
import environment from "../../Environment";

const mutation = graphql`
    mutation UpdateCartProductMutation($input: UpdateCartProductInput!) {
        updateCartProduct(input: $input) {
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

export const updateCartProduct = (
    clientMutationId: string,
    id: string,
    quantityOnCart: number,
    quantityInStock: number
) => {
    const variables = {
        input: {
            clientMutationId,
            id,
            quantityOnCart,
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

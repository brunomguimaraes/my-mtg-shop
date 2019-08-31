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
    quantityOnCart: number
) => {
    const variables = {
        input: {
            clientMutationId,
            id,
            quantityOnCart
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

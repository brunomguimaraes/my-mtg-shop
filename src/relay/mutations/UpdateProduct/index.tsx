import { graphql } from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";
import environment from "../../Environment";

const mutation = graphql`
    mutation UpdateProductMutation($input: UpdateProductInput!) {
        updateProduct(input: $input) {
            clientMutationId
            product {
                id
                quantityInStock
            }
        }
    }
`;

export const updateProduct = (
    clientMutationId: string,
    id: string,
    quantityInStock: number
) => {
    const variables = {
        input: {
            id,
            clientMutationId,
            quantityInStock
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

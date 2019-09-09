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
  quantityInStock: number,
  onCompletedCallBack: () => void,
  onErrorCallBack: () => void
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
      onCompletedCallBack();
    },
    onError: err => onErrorCallBack()
  });
};

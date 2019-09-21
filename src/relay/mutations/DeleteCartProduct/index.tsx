import { graphql } from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";
import environment from "../../Environment";

const mutation = graphql`
  mutation DeleteCartProductMutation($input: DeleteCartProductInput!) {
    deleteCartProduct(input: $input)
  }
`;

export const deleteCartProduct = (
  id: string,
  onCompletedCallBack: () => void,
  onErrorCallBack: () => void
) => {
  const variables = {
    input: {
      id
    }
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      onCompletedCallBack();
    },
    onError: err => {
      onErrorCallBack();
    }
  });
};

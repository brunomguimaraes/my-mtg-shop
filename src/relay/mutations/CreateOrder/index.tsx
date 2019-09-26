import { graphql } from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";
import environment from "../../Environment";

const mutation = graphql`
  mutation CreateOrderMutation($input: CreateOrderInput!) {
    createOrder(input: $input) {
      id
      totalOrderValue
      isPaid
    }
  }
`;

type IOrderedProducts = {
  name: string | null;
  price: number | null;
  quantity: number | null;
};

export const createOrder = (
  isPaid: boolean,
  totalOrderValue: number,
  orderedProduct: IOrderedProducts[],
  onCompletedCallBack: () => void,
  onErrorCallBack: () => void
) => {
  const variables = {
    input: {
      isPaid,
      totalOrderValue,
      orderedProduct
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

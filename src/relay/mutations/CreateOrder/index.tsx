import { graphql } from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";
import environment from "../../Environment";

const mutation = graphql`
	mutation CreateOrderMutation($input: CreateOrderInput!) {
		createOrder(input: $input) {
			clientMutationId
			order {
				id
				cartProducts {
					edges {
						node {
							id
							quantityOnCart
							product {
								id
								name
							}
						}
					}
				}
				totalOrderValue
				isPaid
			}
		}
	}
`;

type IOrderedProducts = {
	name: string;
	price: number;
	quantity: number;
};

export const createOrder = (
	isPaid: boolean,
	cartProductsIds: string[],
	totalOrderValue: number,
	clientMutationId: string,
	productsOrdereds: IOrderedProducts[],
	onCompletedCallBack: () => void,
	onErrorCallBack: () => void
) => {
	const variables = {
		input: {
			isPaid,
			totalOrderValue,
			cartProductsIds,
			clientMutationId,
			productsOrdereds
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

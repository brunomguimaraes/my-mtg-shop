import { graphql } from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";
import environment from "../../Environment";

const mutation = graphql`
	mutation CreateOrderMutation($input: CreateOrderInput!) {
		createOrder(input: $input) {
			order {
				id
				products {
					edges {
						node {
							id
							name
						}
					}
				}
				totalOrderValue
				isPaid
			}
		}
	}
`;

export const completeOrder = (
	isPaid: boolean,
	productsIds: string[],
	totalOrderValue: number,
	userId: string,
	clientMutationId: string,
	onCompletedCallBack: () => void,
	onErrorCallBack: () => void
) => {
	const variables = {
		input: {
			isPaid,
			totalOrderValue,
			productsIds,
			userId,
			clientMutationId
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
			console.log(err);
		}
	});
};

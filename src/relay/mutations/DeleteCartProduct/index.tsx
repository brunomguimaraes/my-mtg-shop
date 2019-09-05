import { graphql } from "babel-plugin-relay/macro";
import { commitMutation } from "react-relay";
import environment from "../../Environment";

const mutation = graphql`
	mutation DeleteCartProductMutation($input: DeleteCartProductInput!) {
		deleteCartProduct(input: $input) {
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

export const deleteCartProduct = (
	id: string,
	clientMutationId: string,
	onCompletedCallBack: () => void,
	onErrorCallBack: () => void
) => {
	const variables = {
		input: {
			id,
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
		}
	});
};

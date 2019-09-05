import React from "react";
import {
	MenuItem,
	Divider,
	makeStyles,
	createStyles,
	Theme
} from "@material-ui/core";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import { formatCurrency } from "../../utils/formaters";
import { CheckoutList_shoppingCart } from "./__generated__/CheckoutList_shoppingCart.graphql";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		sectionProceedToCheckout: {
			margin: theme.spacing(3, 1, 1)
		},
		sectionMenuItem: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start"
		},
		sectionMenuItemSlug: {
			margin: theme.spacing(1, 1, 1)
		},
		sectionPlusMinusIcons: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center"
		},
		snackBarStyle: {
			position: "fixed",
			bottom: "2%",
			right: "2%",
			width: "30vw"
		}
	})
);

type IProps = {
	shoppingCart: CheckoutList_shoppingCart;
	anchorElementReference?: null | HTMLElement;
	anchorElOnClose?: () => void;
};

const CheckoutList = ({
	shoppingCart,
}: IProps) => {
	const classes = useStyles();

	return (
		<React.Fragment>
				{shoppingCart &&
					shoppingCart!.cartProducts!.edges!.map(
						cartProduct =>
							cartProduct!.node.quantityOnCart !== 0 && (
								<MenuItem
									key={shoppingCart!.cartProducts!.edges!.indexOf(
										cartProduct
									)}
									className={classes.sectionMenuItem}
								>
									<div
										className={
											classes.sectionPlusMinusIcons
										}
									>
									</div>
									<div
										className={classes.sectionMenuItemSlug}
									>
										{cartProduct!.node.quantityOnCart}
										{"x "}
									</div>
									<div
										className={classes.sectionMenuItemSlug}
									>
										{cartProduct!.node.product!.name}
									</div>
									<div
										className={classes.sectionMenuItemSlug}
									>
										{formatCurrency(
											cartProduct!.node.product!.price! *
												cartProduct!.node.quantityOnCart
										)}
									</div>
								</MenuItem>
							)
					)}
				<Divider variant="middle" />
				<div className={classes.sectionProceedToCheckout}>
					{"Valor total: "}
					{formatCurrency(
						shoppingCart!.cartProducts!.count !== 0
							? shoppingCart!
									.cartProducts!.edges!.map(
										cartProduct =>
											cartProduct!.node.product!.price! *
											cartProduct!.node.quantityOnCart
									)
									.reduce(
										(totalValue, amount) =>
											totalValue + amount
									)
							: 0
					)}
				</div>
		</React.Fragment>
	);
};

export default createFragmentContainer(CheckoutList, {
	shoppingCart: graphql`
		fragment CheckoutList_shoppingCart on ShoppingCart {
			id
			cartProducts {
				count
				edges {
					node {
						id
						quantityOnCart
						product {
							id
							name
							price
							quantityInStock
						}
					}
				}
			}
		}
	`
});

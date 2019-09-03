import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Divider, Button, Typography } from "@material-ui/core";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { CheckoutCard_viewer } from "./__generated__/CheckoutCard_viewer.graphql";
import CheckoutList from "../CheckoutList";
import { formatCurrency } from "../../utils/formaters";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: "100%",
			maxWidth: 860,
			backgroundColor: theme.palette.background.paper,
			padding: "4px",
			marginTop: "16px",
			margin: "8px"
		},
		productImage: {
			backgroundSize: "contain",
			width: 160,
			height: 160,
			cursor: "pointer"
		},
		section1: {
			margin: theme.spacing(3, 2)
		},
		section2: {
			margin: theme.spacing(2)
		},
		section3: {
			margin: theme.spacing(3, 1, 1)
		},
		clickable: {
			cursor: "pointer",
			"&:hover": {
				textDecoration: "underline"
			}
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
	viewer: CheckoutCard_viewer;
};

const CheckoutCard = ({ viewer }: IProps) => {
	const classes = useStyles();
	console.log("viewer card", viewer.User!.shoppingCart);
	const productsToCheckout = viewer.User!.shoppingCart!.cartProducts!;
	const totalValue = formatCurrency(
		productsToCheckout.count !== 0
			? productsToCheckout
					.edges!.map(
						cartProduct =>
							cartProduct!.node.product!.price! *
							cartProduct!.node.quantityOnCart
					)
					.reduce((totalValue, amount) => totalValue + amount)
			: 0
	);

	const placeOrder = () => {
		console.log("totalValue", totalValue);
		const checkoutProducts = productsToCheckout.edges!.filter(
			products => products!.node.quantityOnCart !== 0
		);
		console.log("productsToBeCheckedOut", checkoutProducts);
	};

	return (
		<Box boxShadow={2} className={classes.root}>
			<div className={classes.section1}>
				<Grid container alignItems="center">
					<Typography
						className={classes.clickable}
						gutterBottom
						variant="h5"
					>
						Checkout
					</Typography>
				</Grid>
			</div>
			<Divider variant="middle" />
			<div className={classes.section2}>
				<Grid
					container
					direction="column"
					justify="center"
					alignItems="flex-start"
				>
					<CheckoutList
						shoppingCart={viewer.User!.shoppingCart as any}
					/>
				</Grid>
			</div>
			<div className={classes.section3}>
				<Button color="primary" onClick={placeOrder}>
					Efetuar Compra
				</Button>
			</div>
		</Box>
	);
};

export default createFragmentContainer(CheckoutCard, {
	viewer: graphql`
		fragment CheckoutCard_viewer on Viewer {
			User(id: "cjzyfwspn0f1a01671todqxul") {
				name
				id
				shoppingCart {
					...CheckoutList_shoppingCart
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
			}
		}
	`
});

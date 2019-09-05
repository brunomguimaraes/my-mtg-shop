import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Divider, Button, Typography } from "@material-ui/core";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { CheckoutCard_viewer } from "./__generated__/CheckoutCard_viewer.graphql";
import CheckoutList from "../CheckoutList";
import { uuidVersion4Generator } from "../../utils/idGenerators";
import { createOrder } from "../../relay/mutations/CreateOrder";
import CreditCardList from "../CreditCardList";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import { deleteCartProduct } from "../../relay/mutations/DeleteCartProduct";
import ThankYou from "../ThankYou";
import { MySnackbarContentWrapper } from "../SnackBar";

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
		},
		backIcon: {
			margin: theme.spacing(1),
			cursor: "pointer"
		}
	})
);

type IProps = {
	viewer: CheckoutCard_viewer;
};

const CheckoutCard = ({ viewer }: IProps) => {
	const classes = useStyles();
	const productsToCheckout = viewer.User!.shoppingCart!.cartProducts!;
	const totalValue =
		productsToCheckout.count !== 0
			? productsToCheckout
					.edges!.map(cartProduct =>
						cartProduct!.node.product!
							? cartProduct!.node.product!.price! *
							  cartProduct!.node.quantityOnCart
							: 0
					)
					.reduce((totalValue, amount) => totalValue + amount)
			: 0;
	const [completedOrder, setcompletedOrder] = React.useState(false);
	const [validCreditCard, setValidCreditCard] = React.useState(false);
	const [orderReview, setOrderReview] = React.useState();
	const [isSnackBarVisible, setSnackBarVisible] = React.useState<boolean>(
		false
	);
	const [error, setError] = React.useState<boolean>(false);
	const [feedbackMessage, setFeedbackMessage] = React.useState<string>("");

	const placeOrder = () => {
		const checkoutProducts = productsToCheckout.edges!.filter(
			products => products!.node.quantityOnCart !== 0
		);
		const checkoutProductsIds = checkoutProducts.map(
			products => products!.node.id
		);
		const orderedProducts = checkoutProducts.map(products => ({
			name: products!.node.product!.name as string,
			price: products!.node.product!.price as number,
			quantity: products!.node.quantityOnCart as number
		}));
		const clientMutationId = uuidVersion4Generator();
		setOrderReview(orderedProducts);
		if (validCreditCard) {
			createOrder(
				validCreditCard,
				checkoutProductsIds,
				totalValue,
				clientMutationId,
				orderedProducts,
				() => cleanUpCart(checkoutProductsIds),
				() => errorHandler("Erro ao efetuar o pedido")
			);
		} else {
			errorHandler("Erro, cartão inválido");
		}
	};

	const cleanUpCart = (productIds: string[]) => {
		setcompletedOrder(true);
		const clientMutationId = uuidVersion4Generator();
		productIds.map(id =>
			deleteCartProduct(
				id,
				clientMutationId,
				() => console.log("success"),
				() => errorHandler("Erro ao limpar o carrinho")
			)
		);
	};

	const creditCardSelector = (creditCardisValid: boolean) => {
		setValidCreditCard(creditCardisValid);
	};

	const errorHandler = (message?: string) => {
		setError(true);
		message
			? setFeedbackMessage(message)
			: setFeedbackMessage("Algum erro ocorreu");
		setSnackBarVisible(true);
		setTimeout(() => setSnackBarVisible(false), 3000);
	};

	return (
		<React.Fragment>
			{completedOrder ? (
				<ThankYou order={orderReview} />
			) : (
				<React.Fragment>
					<Button component={Link} to={"/main"}>
						<ArrowBackIcon
							className={classes.backIcon}
							fontSize={"large"}
						/>
					</Button>
					<Box boxShadow={2} className={classes.root}>
						<div className={classes.section1}>
							<Grid container alignItems="center">
								<Typography gutterBottom variant="h5">
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
								{viewer.User!.shoppingCart!.cartProducts && (
									<CheckoutList
										shoppingCart={
											viewer.User!.shoppingCart as any
										}
									/>
								)}
							</Grid>
						</div>
						<Divider variant="middle" />
						<div className={classes.section2}>
							<Grid>
								<CreditCardList
									creditCardChecker={creditCardSelector}
									creditCardInfo={
										viewer.User!.creditCardInfo as any
									}
								/>
							</Grid>
						</div>

						<div className={classes.section3}>
							<Button color="primary" onClick={placeOrder}>
								Efetuar Compra
							</Button>
						</div>
					</Box>
				</React.Fragment>
			)}
			{isSnackBarVisible && (
				<MySnackbarContentWrapper
					className={classes.snackBarStyle}
					message={feedbackMessage}
					variant={error ? "error" : "success"}
				/>
			)}
		</React.Fragment>
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
				creditCardInfo {
					...CreditCardList_creditCardInfo
				}
			}
		}
	`
});

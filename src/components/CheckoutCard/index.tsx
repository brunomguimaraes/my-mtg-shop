import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Divider, Button, Typography } from "@material-ui/core";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import CheckoutList from "../CheckoutList";
import { commitMutation } from "react-relay";

import CreditCardList from "../CreditCardList";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import { deleteCartProduct } from "../../relay/mutations/DeleteCartProduct";
import ThankYou from "../ThankYou";
import { MySnackbarContentWrapper } from "../SnackBar";
import { CheckoutCard_user } from "../../__generated__/CheckoutCard_user.graphql";
import environment from "../../relay/Environment";

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
      width: "200px"
    },
    backIcon: {
      margin: theme.spacing(1),
      cursor: "pointer"
    }
  })
);

type IProps = {
  user: CheckoutCard_user;
};

type IOrderedProducts = {
  name: string | null;
  price: number | null;
  quantity: number | null;
};

const CheckoutCard = ({ user }: IProps) => {
  const classes = useStyles();
  const productsToCheckout = user.shoppingCart!.cartProducts;
  const totalValue =
    productsToCheckout!.length !== 0
      ? productsToCheckout!
          .map(cartProduct =>
            cartProduct!.product!
              ? cartProduct!.product!.price! * cartProduct!.quantityOnCart!
              : 0
          )
          .reduce((totalValue, amount) => totalValue + amount)
      : 0;
  const [completedOrder, setcompletedOrder] = React.useState(false);
  const [validCreditCard, setValidCreditCard] = React.useState();
  const [orderReview, setOrderReview] = React.useState();
  const [isSnackBarVisible, setSnackBarVisible] = React.useState<boolean>(
    false
  );
  const [error, setError] = React.useState<boolean>(false);
  const [feedbackMessage, setFeedbackMessage] = React.useState<string>("");

  const placeOrder = () => {
    if (productsToCheckout) {
      const checkoutProducts = productsToCheckout.filter(
        products => products!.quantityOnCart !== 0
      );

      const checkoutProductsIds = checkoutProducts.map(
        products => products!.id
      );
      const orderedProducts = checkoutProducts.map(products => ({
        name: products!.product!.name,
        price: products!.product!.price,
        quantity: products!.quantityOnCart
      }));

      setOrderReview(orderedProducts);
      if (validCreditCard) {
        createOrder(
          validCreditCard,
          totalValue,
          orderedProducts,
          () => cleanUpCart(checkoutProductsIds),
          () => errorHandler("Erro ao efetuar o pedido")
        );
      } else if (validCreditCard === false) {
        errorHandler("Erro, cartão inválido");
      } else {
        errorHandler("Erro, cartão não selecionado");
      }
    } else {
      errorHandler("Algum erro ocorreu");
    }
  };

  const cleanUpCart = (productIds: string[]) => {
    setcompletedOrder(true);
    productIds.map(id =>
      deleteCartProduct(
        id,
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

  const mutation = graphql`
    mutation CreateOrderMutation($input: CreateOrderInput!) {
      createOrder(input: $input) {
        id
        totalOrderValue
        isPaid
      }
    }
  `;

  const createOrder = (
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

  return (
    <React.Fragment>
      {completedOrder ? (
        <ThankYou order={orderReview} />
      ) : (
        <React.Fragment>
          <Button component={Link} to={"/main"}>
            <ArrowBackIcon className={classes.backIcon} fontSize={"large"} />
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
                {user.shoppingCart && user.shoppingCart.cartProducts && (
                  <CheckoutList shoppingCart={user.shoppingCart} />
                )}
              </Grid>
            </div>
            <Divider variant="middle" />
            <div className={classes.section2}>
              <Grid>
                <CreditCardList
                  creditCardChecker={creditCardSelector}
                  creditCardInfo={user}
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
  user: graphql`
    fragment CheckoutCard_user on User {
      name
      id
      shoppingCart {
        ...CheckoutList_shoppingCart
        cartProducts {
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
      ...CreditCardList_creditCardInfo
      creditCardInfo {
        cardNumber
        cvv
        id
        isValid
      }
    }
  `
});

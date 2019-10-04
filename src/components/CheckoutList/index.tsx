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
import { CartProduct } from "../CheckoutCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sectionProceedToCheckout: {
      margin: theme.spacing(3, 1, 1)
    },
    sectionMenuItem: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
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
    sectionMenuItemName: {
      margin: theme.spacing(1, 1, 1),
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    snackBarStyle: {
      position: "fixed",
      bottom: "2%",
      right: "2%",
      width: "200px"
    }
  })
);

type Props = {
  shoppingCart: ShoppingCart;

  anchorElementReference?: null | HTMLElement;
  anchorElOnClose?: () => void;
};

type ShoppingCart = {
  cartProducts: CartProduct[];
};

const CheckoutList = ({ shoppingCart }: Props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {shoppingCart &&
        shoppingCart!.cartProducts!.map(
          cartProduct =>
            cartProduct!.quantityOnCart !== 0 && (
              <MenuItem
                key={shoppingCart!.cartProducts!.indexOf(cartProduct)}
                className={classes.sectionMenuItem}
              >
                <div className={classes.sectionPlusMinusIcons}></div>
                <div className={classes.sectionMenuItemSlug}>
                  {cartProduct!.quantityOnCart}
                  {"x "}
                </div>
                <div className={classes.sectionMenuItemName}>
                  {cartProduct!.product!.name}
                </div>
                <div className={classes.sectionMenuItemSlug}>
                  {formatCurrency(
                    cartProduct!.product!.price! * cartProduct!.quantityOnCart!
                  )}
                </div>
              </MenuItem>
            )
        )}
      <Divider variant="middle" />
      <div className={classes.sectionProceedToCheckout}>
        {"Valor total: "}
        {formatCurrency(
          shoppingCart!.cartProducts!.length !== 0
            ? shoppingCart!
                .cartProducts!.map(
                  cartProduct =>
                    cartProduct!.product!.price! * cartProduct!.quantityOnCart!
                )
                .reduce((totalValue, amount) => totalValue + amount)
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
  `
});

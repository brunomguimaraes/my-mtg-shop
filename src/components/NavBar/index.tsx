import React from "react";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { IconButton, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import CartProductsList, { IShoppingCart } from "../CartProductsList";
import { MySnackbarContentWrapper } from "../SnackBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block"
      }
    },
    snackBarStyle: {
      position: "fixed",
      bottom: "2%",
      right: "2%",
      width: "200px"
    },
    sectionCart: {
      [theme.breakpoints.up("md")]: {
        display: "flex"
      }
    }
  })
);

type Props = {
  user: INavbar;
  showCart?: boolean;
};

export type INavbar = {
  name: string;
  id: string;
  shoppingCart: IShoppingCart;
};

const NavBar = ({ user, showCart }: Props) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isSnackBarVisible, setSnackBarVisible] = React.useState<boolean>(
    false
  );
  const [error, setError] = React.useState<boolean>(false);
  const [feedbackMessage, setFeedbackMessage] = React.useState<string>("");
  const CartListId = "primary-cart-list-dropdown";

  const handleCartListOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCartListClose = () => {
    setAnchorEl(null);
  };

  const navBarErrorHandler = (message?: string) => {
    setError(true);
    message
      ? setFeedbackMessage(message)
      : setFeedbackMessage("Algum erro ocorreu");
    setSnackBarVisible(true);
    setTimeout(() => setSnackBarVisible(false), 3000);
  };
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        {isSnackBarVisible && (
          <MySnackbarContentWrapper
            className={classes.snackBarStyle}
            message={feedbackMessage}
            variant={error ? "error" : "success"}
          />
        )}
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            My MTG Store
          </Typography>
          <div className={classes.grow} />
          {showCart && (
            <div className={classes.sectionCart}>
              {user && (
                <IconButton
                  aria-label="show products list on cart"
                  aria-controls={CartListId}
                  aria-haspopup="true"
                  onClick={
                    user.shoppingCart.cartProducts
                      .map(product => product.quantityOnCart!)
                      .reduce((totalValue, amount) => totalValue + amount) > 0
                      ? handleCartListOpen
                      : () => navBarErrorHandler("Carrinho vazio.")
                  }
                  color="inherit"
                >
                  <Badge
                    badgeContent={
                      user.shoppingCart.cartProducts! &&
                      user.shoppingCart.cartProducts.length !== 0
                        ? user.shoppingCart.cartProducts
                            .map(product => product.quantityOnCart!)
                            .reduce((totalValue, amount) => totalValue + amount)
                        : 0
                    }
                    color="secondary"
                  >
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              )}
            </div>
          )}
        </Toolbar>
      </AppBar>
      {user.shoppingCart && user.shoppingCart.cartProducts && (
        <CartProductsList
          anchorElOnClose={handleCartListClose}
          anchorElementReference={anchorEl}
          shoppingCart={user.shoppingCart}
        />
      )}
    </div>
  );
};

export default createFragmentContainer(NavBar, {
  user: graphql`
    fragment NavBar_user on User {
      name
      id
      shoppingCart {
        cartProducts {
          quantityOnCart
        }
        ...CartProductsList_shoppingCart
      }
    }
  `
});

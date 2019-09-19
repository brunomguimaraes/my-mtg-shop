import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import CartProductsList from "../CartProductsList";
import { IconButton, Badge } from "@material-ui/core";
import { NavBar_user } from "./__generated__/NavBar_user.graphql";

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
    sectionCart: {
      [theme.breakpoints.up("md")]: {
        display: "flex"
      }
    }
  })
);

type IProps = {
  user: NavBar_user;
  showCart?: boolean;
};

const NavBar = ({ user, showCart }: IProps) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const CartListId = "primary-cart-list-dropdown";

  const handleCartListOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCartListClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            My MTG Store
          </Typography>
          <div className={classes.grow} />
          {showCart && (
            <div className={classes.sectionCart}>
              <IconButton
                aria-label="show products list on cart"
                aria-controls={CartListId}
                aria-haspopup="true"
                onClick={handleCartListOpen}
                color="inherit"
              >
                <Badge
                  badgeContent={
                    user.shoppingCart!.cartProducts! &&
                    user.shoppingCart!.cartProducts!.length !== 0
                      ? user
                          .shoppingCart!.cartProducts!.map(
                            product => product!.quantityOnCart!
                          )
                          .reduce((totalValue, amount) => totalValue + amount)
                      : 0
                  }
                  color="secondary"
                >
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {user.shoppingCart!.cartProducts && (
        <CartProductsList
          anchorElOnClose={handleCartListClose}
          anchorElementReference={anchorEl}
          shoppingCart={user.shoppingCart as any}
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

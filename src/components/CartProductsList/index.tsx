import React from "react";
import {
  Menu,
  MenuItem,
  Divider,
  Button,
  makeStyles,
  createStyles,
  Theme
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import { formatCurrency } from "../../utils/formaters";
import { updateProduct } from "../../relay/mutations/UpdateProduct";
import { updateCartProduct } from "../../relay/mutations/UpdateCartProduct";
import { MySnackbarContentWrapper } from "../SnackBar";
import { Link } from "react-router-dom";
import { CartProductsList_shoppingCart } from "../../__generated__/CartProductsList_shoppingCart.graphql";

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
    sectionMenuItemName: {
      margin: theme.spacing(1, 1, 1),
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
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
      width: "200px"
    }
  })
);

type IProps = {
  shoppingCart: CartProductsList_shoppingCart;
  anchorElementReference: null | HTMLElement;
  anchorElOnClose: () => void;
};

const CartProductsList = ({
  shoppingCart,
  anchorElementReference,
  anchorElOnClose
}: IProps) => {
  const classes = useStyles();

  React.useEffect(() => {
    setAnchorEl(anchorElementReference);
  }, [anchorElementReference]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(
    anchorElementReference
  );
  const [loading, setLoading] = React.useState<boolean>(false);
  const [isSnackBarVisible, setSnackBarVisible] = React.useState<boolean>(
    false
  );
  const [error, setError] = React.useState<boolean>(false);
  const [feedbackMessage, setFeedbackMessage] = React.useState<string>("");

  const isCartListOpen = Boolean(anchorEl);
  const DropdownListId = "secondary-cart-list-dropdown";

  const handleCartListClose = () => {
    anchorElOnClose();
    setAnchorEl(null);
  };

  const handleIncreaseCartProduct = (
    cartProductId: string | null,
    productId: string | null,
    numberOnCart: number | null,
    productsInStock: number | null
  ) => {
    setError(false);
    setLoading(true);
    if (
      cartProductId ||
      productId ||
      numberOnCart ||
      productsInStock === null
    ) {
      errorHandler("Algum erro ocorreu.");
    } else if (productsInStock !== 0) {
      updateCartProduct(cartProductId, numberOnCart! + 1);
      updateProduct(
        productId!,
        productsInStock >= 0 ? productsInStock - 1 : 0,
        () => successHandler("Produto adicionado com sucesso"),
        () => errorHandler()
      );
    } else {
      errorHandler("Produto não disponível em estoque");
    }
  };

  const handleDecreaseCartProduct = (
    cartProductId: string | null,
    productId: string | null,
    numberOnCart: number | null,
    productsInStock: number | null
  ) => {
    setError(false);
    setLoading(true);
    if (
      cartProductId ||
      productId ||
      numberOnCart ||
      productsInStock === null
    ) {
      errorHandler("Algum erro ocorreu.");
    } else {
      updateCartProduct(cartProductId, numberOnCart! - 1);
      if (numberOnCart! - 1 <= 0) {
        handleCartListClose();
      }
      updateProduct(
        productId!,
        productsInStock >= 0 ? productsInStock + 1 : 0,
        () => successHandler("Produto removido com sucesso"),
        () => errorHandler()
      );
    }
  };

  const successHandler = (message: string) => {
    setLoading(false);
    setError(false);
    setFeedbackMessage(message);
    setSnackBarVisible(true);
    setTimeout(() => setSnackBarVisible(false), 3000);
  };

  const errorHandler = (message?: string) => {
    setLoading(false);
    setError(true);
    message
      ? setFeedbackMessage(message)
      : setFeedbackMessage("Algum erro ocorreu");
    setSnackBarVisible(true);
    setTimeout(() => setSnackBarVisible(false), 3000);
  };

  return (
    <React.Fragment>
      {shoppingCart.cartProducts && (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          id={DropdownListId}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={isCartListOpen}
          onClose={handleCartListClose}
        >
          {shoppingCart &&
            shoppingCart.cartProducts &&
            shoppingCart.cartProducts.map(
              cartProduct =>
                cartProduct &&
                cartProduct.product &&
                cartProduct.quantityOnCart !== 0 && (
                  <MenuItem
                    key={shoppingCart.cartProducts!.indexOf(cartProduct)}
                    className={classes.sectionMenuItem}
                  >
                    {cartProduct && (
                      <div className={classes.sectionPlusMinusIcons}>
                        <AddCircleIcon
                          onClick={() =>
                            handleIncreaseCartProduct(
                              cartProduct.id,
                              cartProduct.product!.id,
                              cartProduct.quantityOnCart!,
                              cartProduct.product!.quantityInStock
                            )
                          }
                          color={loading ? "disabled" : "inherit"}
                          fontSize="large"
                        />
                        <RemoveCircleIcon
                          onClick={() =>
                            loading
                              ? null
                              : handleDecreaseCartProduct(
                                  cartProduct.id,
                                  cartProduct.product!.id,
                                  cartProduct.quantityOnCart,
                                  cartProduct.product!.quantityInStock
                                )
                          }
                          color={loading ? "disabled" : "inherit"}
                          fontSize="large"
                        />
                      </div>
                    )}
                    <div className={classes.sectionMenuItemSlug}>
                      {cartProduct.quantityOnCart}
                      {"x "}
                    </div>
                    <div className={classes.sectionMenuItemName}>
                      {cartProduct.product.name}
                    </div>
                    <div className={classes.sectionMenuItemSlug}>
                      {cartProduct.product &&
                        formatCurrency(
                          cartProduct.product.price! *
                            cartProduct.quantityOnCart!
                        )}
                    </div>
                  </MenuItem>
                )
            )}
          {isSnackBarVisible && (
            <MySnackbarContentWrapper
              className={classes.snackBarStyle}
              message={feedbackMessage}
              variant={error ? "error" : "success"}
            />
          )}
          <Divider variant="middle" />
          <div className={classes.sectionProceedToCheckout}>
            <Button component={Link} to={"/checkout"} color="primary">
              Finalizar Compra
            </Button>
            {"Valor total: "}
            {shoppingCart.cartProducts &&
              formatCurrency(
                shoppingCart.cartProducts.length !== 0
                  ? shoppingCart.cartProducts
                      .map(cartProduct =>
                        cartProduct && cartProduct.product
                          ? cartProduct.product.price! *
                            cartProduct.quantityOnCart!
                          : 0
                      )
                      .reduce((totalValue, amount) => totalValue + amount)
                  : 0
              )}
          </div>
        </Menu>
      )}
    </React.Fragment>
  );
};

export default createFragmentContainer(CartProductsList, {
  shoppingCart: graphql`
    fragment CartProductsList_shoppingCart on ShoppingCart {
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

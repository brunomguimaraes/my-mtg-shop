import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { CardMedia, Box } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { formatCurrency } from "../../utils/formaters";
import { createFragmentContainer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { DetailedProductCard_product } from "./__generated__/DetailedProductCard_product.graphql";
import { createCartProduct } from "../../relay/mutations/CreateCartProduct";
import { updateCartProduct } from "../../relay/mutations/UpdateCartProduct";
import { updateProduct } from "../../relay/mutations/UpdateProduct";
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
      width: "200px"
    }
  })
);

type IProduct = {
  product: DetailedProductCard_product;
  productsOnCart: any;
  shoppingCartId: string;
  selectedProductHandler: (product: any) => void;
};

type CartProduct = {
  id: string;
  quantityOnCart: number | null;
  product: Product;
};

type Product = {
  id: string;
  imgUrl: string;
  name: string;
  price: number;
  quantityInStock: number;
  cardType: string;
  description: string;
  cardColor:
    | "Blue"
    | "Black"
    | "Gold"
    | "Red"
    | "Green"
    | "Colorless"
    | "White";
};

function DetailedProductCard({
  product,
  productsOnCart,
  shoppingCartId,
  selectedProductHandler
}: IProduct) {
  const classes = useStyles();

  const [loading, setLoading] = React.useState<boolean>(false);
  const [isSnackBarVisible, setSnackBarVisible] = React.useState<boolean>(
    false
  );
  const [error, setError] = React.useState<boolean>(false);
  const [feedbackMessage, setFeedbackMessage] = React.useState<string>("");

  const handleAddToCart = () => {
    setError(false);
    setLoading(true);
    if (product.quantityInStock !== 0) {
      const productToBeAdded = productsOnCart!.find(
        (e: any) => e!.product!.id === product.id
      );
      if (productToBeAdded) {
        const cartProductId = productToBeAdded.id;
        const numberOnCart = productToBeAdded!.quantityOnCart;
        updateCartProduct(cartProductId, numberOnCart + 1);
      } else {
        createCartProduct(1, product.id, shoppingCartId);
      }
      updateProduct(
        product.id,
        product.quantityInStock! >= 0 ? product.quantityInStock! - 1 : 0,
        () => successHandler("Produto adicionado com sucesso"),
        () => errorHandler()
      );
    } else {
      errorHandler("Produto não disponível em estoque");
    }
  };

  const successHandler = (message: string) => {
    setError(false);
    setLoading(false);
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
    <Box boxShadow={2} key={product.id} className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography
              onClick={() => selectedProductHandler(product)}
              className={classes.clickable}
              gutterBottom
              variant="h5"
            >
              {product.name}
            </Typography>
          </Grid>
          {product.price && (
            <Grid item>
              <Typography gutterBottom variant="h6">
                {formatCurrency(product.price)}
              </Typography>
            </Grid>
          )}
        </Grid>
      </div>
      <Divider variant="middle" />
      <div className={classes.section2}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            {product.imgUrl && (
              <CardMedia
                onClick={() => selectedProductHandler(product)}
                className={classes.productImage}
                image={product.imgUrl}
                title={`${product.name} Card pic`}
              />
            )}
          </Grid>
          <Grid item>
            <Typography gutterBottom variant="body2">
              Em estoque: {product.quantityInStock}
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className={classes.section3}>
        <Button color="primary" disabled={loading} onClick={handleAddToCart}>
          <AddShoppingCartIcon />
          Adicionar ao carrinho
        </Button>
      </div>
      {isSnackBarVisible && (
        <MySnackbarContentWrapper
          className={classes.snackBarStyle}
          message={feedbackMessage}
          variant={error ? "error" : "success"}
        />
      )}
    </Box>
  );
}

export default createFragmentContainer(DetailedProductCard, {
  product: graphql`
    fragment DetailedProductCard_product on Product {
      id
      imgUrl
      name
      price
      quantityInStock
      cardColor
      description
      cardType
    }
  `
});

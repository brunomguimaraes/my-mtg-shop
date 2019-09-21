import React from "react";
import DetailedProductCard from "../../components/DetailedProductCard";
import { Container, makeStyles, createStyles, Theme } from "@material-ui/core";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import { ProductsList_products } from "./__generated__/ProductsList_products.graphql";
import { ProductsList_shoppingCart } from "./__generated__/ProductsList_shoppingCart.graphql";
import ProductCardInfo from "../ProductCardInfo";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backIcon: {
      margin: theme.spacing(1),
      cursor: "pointer"
    }
  })
);

type IProps = {
  products: ProductsList_products;
  shoppingCart: ProductsList_shoppingCart;
};

const ProductsList = ({ products, shoppingCart }: IProps) => {
  const classes = useStyles();
  const [selectedProductInfo, setSelectedProductInfo] = React.useState();

  const handleSelectedProduct = (product: any) => {
    setSelectedProductInfo(product);
  };
  return (
    <React.Fragment>
      {selectedProductInfo ? (
        <Container>
          <ArrowBackIcon
            className={classes.backIcon}
            fontSize={"large"}
            onClick={() => setSelectedProductInfo(null)}
          />
          <ProductCardInfo
            product={selectedProductInfo}
            productsOnCart={shoppingCart.cartProducts}
            shoppingCartId={shoppingCart.id}
          />
        </Container>
      ) : (
        products &&
        products.products.map(product => (
          <Container>
            <DetailedProductCard
              product={product!}
              productsOnCart={shoppingCart.cartProducts}
              shoppingCartId={shoppingCart.id}
              selectedProductHandler={handleSelectedProduct}
            />
          </Container>
        ))
      )}
    </React.Fragment>
  );
};

export default createFragmentContainer(ProductsList, {
  products: graphql`
    fragment ProductsList_products on Query {
      products {
        ...DetailedProductCard_product
      }
    }
  `,
  shoppingCart: graphql`
    fragment ProductsList_shoppingCart on ShoppingCart {
      id
      cartProducts {
        id
        quantityOnCart
        product {
          id
        }
      }
    }
  `
});

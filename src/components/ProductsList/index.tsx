import React from "react";
import DetailedProductCard from "../../components/DetailedProductCard";
import { Container, makeStyles, createStyles, Theme } from "@material-ui/core";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import { ProductsList_allProducts } from "./__generated__/ProductsList_allProducts.graphql";
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
  allProducts: ProductsList_allProducts;
  shoppingCart: ProductsList_shoppingCart;
};

const ProductsList = ({ allProducts, shoppingCart }: IProps) => {
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
        allProducts &&
        allProducts.edges!.map(product => (
          <Container key={allProducts.edges!.indexOf(product)}>
            <DetailedProductCard
              product={product!.node}
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
  allProducts: graphql`
    fragment ProductsList_allProducts on ProductConnection {
      count
      edges {
        node {
          ...DetailedProductCard_product
        }
      }
    }
  `,
  shoppingCart: graphql`
    fragment ProductsList_shoppingCart on ShoppingCart {
      id
      cartProducts {
        edges {
          node {
            id
            quantityOnCart
            product {
              id
            }
          }
        }
      }
    }
  `
});

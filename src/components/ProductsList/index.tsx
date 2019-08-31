import React from "react";
import DetailedProductCard from "../../components/DetailedProductCard";
import { Container } from "@material-ui/core";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import { ProductsList_allProducts } from "./__generated__/ProductsList_allProducts.graphql";
import { ProductsList_shoppingCart } from "./__generated__/ProductsList_shoppingCart.graphql";

type IProps = {
    allProducts: ProductsList_allProducts;
    shoppingCart: ProductsList_shoppingCart;
};

const ProductsList = ({ allProducts, shoppingCart }: IProps) => {
    return (
        <React.Fragment>
            {allProducts &&
                allProducts.edges!.map((product) => (
                    <Container key={allProducts.edges!.indexOf(product)}>
                        <DetailedProductCard
                            product={product!.node}
                            productsOnCart={shoppingCart.cartProducts}
                            shoppingCartId={shoppingCart.id}
                        />
                    </Container>
                ))}
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
                        product {
                            id
                        }
                    }
                }
            }
        }
    `
});

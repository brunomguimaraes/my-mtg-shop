import React from "react";
import DetailedProductCard from "../../components/DetailedProductCard";
import { Container } from "@material-ui/core";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import { ProductsList_allProducts } from "./__generated__/ProductsList_allProducts.graphql";

type IProps = {
    allProducts: ProductsList_allProducts;
};

const ProductsList = ({ allProducts }: IProps) => {
    return (
        <React.Fragment>
            {allProducts &&
                allProducts.edges!.map((product) => (
                    <Container key={allProducts.edges!.indexOf(product)}>
                        <DetailedProductCard product={product!.node} />
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
    `
});

import React from "react";
import DetailedProductCard from "../../components/DetailedProductCard";
import { Container } from "@material-ui/core";

export interface IProducts {
    allProducts: IProduct[];
}

export interface IProduct {
    id: string;
    name: string;
    imgUrl: string;
    price: number;
    quantity: number;
}

const ProductsList = ({ allProducts }: IProducts) => {
    return (
        <React.Fragment>
            {allProducts.map((product: IProduct) => (
                <Container key={product.id}>
                    <DetailedProductCard
                        id={product.id}
                        name={product.name}
                        imgUrl={product.imgUrl}
                        price={product.price}
                        quantity={product.quantity}
                    />
                </Container>
            ))}
        </React.Fragment>
    );
};

export default ProductsList;

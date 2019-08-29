import React from "react";
import environment from "../../Environment";
import { QueryRenderer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { ProductsQuery } from "./__generated__/ProductsQuery.graphql";
import Loading from "../../components/Loading";
import ProductsList, { IProduct } from "../../components/ProductsList";

const Products: React.FC = () => {
    return (
        <React.Fragment>
            <QueryRenderer<ProductsQuery>
                environment={environment}
                query={graphql`
                    query ProductsQuery {
                        viewer {
                            allProducts {
                                count
                                edges {
                                    node {
                                        name
                                        price
                                        id
                                        imgUrl
                                        quantity
                                    }
                                }
                            }
                        }
                    }
                `}
                variables={{}}
                render={({ error, props }): React.ReactNode => {
                    if (error) {
                        return <div>Erro ao carregar produtos</div>;
                    }
                    if (!props) {
                        return <Loading />;
                    }
                    return (
                        <ProductsList
                            allProducts={
                                (props.viewer.allProducts
                                    .edges! as unknown) as IProduct[]
                            }
                        />
                    );
                }}
            />
        </React.Fragment>
    );
};

export default Products;

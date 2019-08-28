import React from "react";
import DetailedProductCard from "../../components/DetailedProductCard";
import { CssBaseline, Container } from "@material-ui/core";
import environment from "../../Environment";
import { QueryRenderer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { ProductsQuery } from "./__generated__/ProductsQuery.graphql";
import Loading from "../../components/Loading";

const Products: React.FC = () => {
    return (
        <React.Fragment>
            <CssBaseline />
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
                    console.log("response:", props);
                    return (
                        <div>
                            {props.viewer.allProducts.edges!.map((e: any) => (
                                <Container key={e.node.id}>
                                    <DetailedProductCard
                                        id={e.node.id}
                                        name={e.node.name}
                                        imgUrl={e.node.imgUrl}
                                        price={e.node.price}
                                        quantity={e.node.quantity}
                                    />
                                </Container>
                            ))}
                        </div>
                    );
                }}
            />
        </React.Fragment>
    );
};

export default Products;

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
import { uuidVersion4Generator } from "../../utils/idGenerators";
import { updateCartProduct } from "../../relay/mutations/UpdateCartProduct";
import { updateProduct } from "../../relay/mutations/UpdateProduct";

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
            width: 120,
            height: 120,
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
        }
    })
);

interface ICartProducts {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly quantityOnCart: number;
            readonly product: {
                readonly id: string;
            } | null;
        };
    } | null> | null;
}

type IProduct = {
    product: DetailedProductCard_product;
    productsOnCart: ICartProducts | null;
    shoppingCartId: string;
    selectedProductHandler: (product: any) => void;
};

function DetailedProductCard({
    product,
    productsOnCart,
    shoppingCartId,
    selectedProductHandler
}: IProduct) {
    const classes = useStyles();
    const clientMutationId = uuidVersion4Generator();

    const handleAddToCart = () => {
        if (
            productsOnCart!.edges!.find(
                (e) => e!.node!.product!.id === product.id
            )
        ) {
            const cartProductId = productsOnCart!.edges!.find(
                (e) => e!.node!.product!.id === product.id
            )!.node.id;
            const numberOnCart = productsOnCart!.edges!.find(
                (e) => e!.node!.product!.id === product.id
            )!.node.quantityOnCart;

            updateCartProduct(
                clientMutationId,
                cartProductId,
                numberOnCart + 1
            );
            updateProduct(
                clientMutationId,
                product.id,
                product.quantityInStock! >= 0 ? product.quantityInStock! - 1 : 0
            );
        } else {
            createCartProduct(clientMutationId, 1, product.id, shoppingCartId);
            updateProduct(
                clientMutationId,
                product.id,
                product.quantityInStock! >= 0 ? product.quantityInStock! - 1 : 0
            );
        }
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
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
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
                <Button color="primary" onClick={handleAddToCart}>
                    <AddShoppingCartIcon />
                    Adicionar ao carrinho
                </Button>
            </div>
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

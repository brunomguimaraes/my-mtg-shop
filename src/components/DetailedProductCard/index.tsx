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
            height: 120
        },
        chip: {
            marginRight: theme.spacing(1)
        },
        section1: {
            margin: theme.spacing(3, 2)
        },
        section2: {
            margin: theme.spacing(2)
        },
        section3: {
            margin: theme.spacing(3, 1, 1)
        }
    })
);

type IProduct = {
    product: DetailedProductCard_product;
};

function DetailedProductCard({ product }: IProduct) {
    const classes = useStyles();

    return (
        <Box boxShadow={2} key={product.id} className={classes.root}>
            <div className={classes.section1}>
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h5">
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
                                className={classes.productImage}
                                image={product.imgUrl}
                                title={`${product.name} Card pic`}
                            />
                        )}
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom variant="body2">
                            Em estoque: {product.quantity}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.section3}>
                <Button color="primary">
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
            quantity
        }
    `
});

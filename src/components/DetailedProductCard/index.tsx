import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { CardMedia, Box } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { formatCurrency } from "../../utils/formaters";

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

interface IProduct {
    id: string;
    imgUrl: string;
    name: string;
    price: number;
    quantity: number;
}

export default function DetailedProductCard({
    id,
    imgUrl,
    name,
    price,
    quantity
}: IProduct) {
    const classes = useStyles();

    return (
        <Box boxShadow={2} key={id} className={classes.root}>
            <div className={classes.section1}>
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h5">
                            {name}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom variant="h6">
                            {formatCurrency(price)}
                        </Typography>
                    </Grid>
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
                        <CardMedia
                            className={classes.productImage}
                            image={imgUrl}
                            title={`${name} Card pic`}
                        />
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom variant="body2">
                            Em estoque: {quantity}
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

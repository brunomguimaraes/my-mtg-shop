import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start"
    },
    progress: {
      margin: theme.spacing(2)
    },
    backIcon: {
      margin: theme.spacing(1),
      cursor: "pointer"
    }
  })
);
type OrderedProducts = {
  name: string;
  price: number;
  quantity: number;
};

type Props = {
  order: OrderedProducts[];
};

export default function ThankYou({ order }: Props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Button component={Link} to={"/main"}>
        <ArrowBackIcon className={classes.backIcon} fontSize={"large"} />
      </Button>
      <Typography gutterBottom variant="h6">
        Obrigado pela compra!
      </Typography>
      <Box className={classes.wrapper}>
        <Typography gutterBottom variant="h6">
          Seu pedido:
        </Typography>
        {order.map(orderedProduct => (
          <Grid container>
            <Grid item xs>
              {orderedProduct.quantity}x
            </Grid>
            <Grid item xs>
              {orderedProduct.name}
            </Grid>
          </Grid>
        ))}
      </Box>
    </React.Fragment>
  );
}

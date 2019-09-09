import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";

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
    }
  })
);
type IOrderedProducts = {
  name: string;
  price: number;
  quantity: number;
};

type IProps = {
  order: IOrderedProducts[];
};

export default function ThankYou({ order }: IProps) {
  const classes = useStyles();

  return (
    <React.Fragment>
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

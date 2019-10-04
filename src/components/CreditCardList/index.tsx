import React from "react";
import {
  makeStyles,
  createStyles,
  Theme,
  CardActionArea,
  Card,
  Typography,
  CardContent
} from "@material-ui/core";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import { CreditCard } from "../CheckoutCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContainer: {
      display: "flex",
      flexDirection: "row"
    },
    card: {
      maxWidth: 300,
      margin: theme.spacing(1)
    },
    selectedCard: {
      maxWidth: 300,
      margin: theme.spacing(1),
      borderColor: "red",
      borderStyle: "solid"
    }
  })
);

type IProps = {
  creditCardInfo: CreditCard[];
  creditCardChecker: (cardIsValid: boolean) => void;
};

const CreditCardList = ({ creditCardInfo, creditCardChecker }: Props) => {
  const classes = useStyles();
  const [isSelectedId, setSelectedId] = React.useState();

  const creditCardSelector = (isValid: boolean, id: string) => {
    creditCardChecker(isValid);
    setSelectedId(id);
  };

  return (
    <React.Fragment>
      <Typography gutterBottom variant="h6" component="h2">
        Selecione o Cartão para pagamento:
      </Typography>
      <div className={classes.cardContainer}>
        {creditCardInfo.map(creditCard => (
          <Card
            key={creditCard.id}
            className={
              isSelectedId === creditCard.id
                ? classes.selectedCard
                : classes.card
            }
          >
            <CardActionArea
              onClick={() =>
                creditCardSelector(creditCard.isValid, creditCard.id)
              }
            >
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {creditCard.cardNumber}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  CVV: {creditCard.cvv}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </React.Fragment>
  );
};

export default createFragmentContainer(CreditCardList, {
  creditCardInfo: graphql`
    fragment CreditCardList_creditCardInfo on User {
      creditCardInfo {
        cardNumber
        cvv
        id
        isValid
      }
    }
  `
});

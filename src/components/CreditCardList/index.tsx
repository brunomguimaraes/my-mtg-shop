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
import { CreditCardList_creditCardInfo } from "./__generated__/CreditCardList_creditCardInfo.graphql";

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
  creditCardInfo: CreditCardList_creditCardInfo;
  creditCardChecker: (cardIsValid: boolean) => void;
};

const CreditCardList = ({ creditCardInfo, creditCardChecker }: IProps) => {
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
        {creditCardInfo!.edges!.map(creditCard => (
          <Card
            key={creditCard!.node.id}
            className={
              isSelectedId === creditCard!.node.id
                ? classes.selectedCard
                : classes.card
            }
          >
            <CardActionArea
              onClick={() =>
                creditCardSelector(
                  creditCard!.node.isValid,
                  creditCard!.node.id
                )
              }
            >
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {creditCard!.node.cardNumber}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                  CVV: {creditCard!.node.cvv}
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
    fragment CreditCardList_creditCardInfo on PaymentInfoConnection {
      edges {
        node {
          cardNumber
          cvv
          id
          isValid
        }
      }
    }
  `
});
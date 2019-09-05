import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		wrapper: {
			width: "100%",
			height: "100vh",
			display: "flex",
			justifyContent: "center",
			alignItems: "center"
		},
		progress: {
			margin: theme.spacing(2)
		}
	})
);

export default function ThankYou() {
	const classes = useStyles();

	return <div className={classes.wrapper}>Obrigado pela compra!</div>;
}

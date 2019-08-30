import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

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

export default function Loading() {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <CircularProgress className={classes.progress} />
        </div>
    );
}

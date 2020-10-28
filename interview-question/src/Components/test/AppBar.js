import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    bar: {
        backgroundColor: "#344152!important",
    },
    text: {
        color:'white'
    }
}));

export default function DenseAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar className={classes.bar} position="static">
            <Toolbar variant="dense">
            <Typography className={classes.text} variant="h6">
                Status Dashboard
            </Typography>
            </Toolbar>
        </AppBar>
        </div>
    );
}

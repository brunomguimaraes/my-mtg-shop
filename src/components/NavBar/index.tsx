import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Menu, MenuItem, Divider, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: {
            display: "none",
            [theme.breakpoints.up("sm")]: {
                display: "block"
            }
        },
        inputRoot: {
            color: "inherit"
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 7),
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("md")]: {
                width: 200
            }
        },
        sectionDesktop: {
            [theme.breakpoints.up("md")]: {
                display: "flex"
            }
        },
        sectionProceedToCheckout: {
            margin: theme.spacing(3, 1, 1)
        }
    })
);

export default function NavBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const isCartListOpen = Boolean(anchorEl);
    const DropdownListId = "secondary-cart-list-dropdown";

    function handleCartListOpen(event: React.MouseEvent<HTMLElement>) {
        setAnchorEl(event.currentTarget);
    }

    function handleCartListClose() {
        setAnchorEl(null);
    }

    const CartListId = "primary-cart-list-dropdown";

    const renderProductList = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            id={DropdownListId}
            keepMounted
            transformOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={isCartListOpen}
            onClose={handleCartListClose}
        >
            <MenuItem>Produto 1</MenuItem>
            <MenuItem>Produto 2</MenuItem>
            <MenuItem>Produto 3</MenuItem>
            <MenuItem>Produto 4</MenuItem>
            <Divider variant="middle" />
            <div className={classes.sectionProceedToCheckout}>
                <Button color="primary">Finalizar Compra</Button>
            </div>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        My MTG Store
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            aria-label="show products list on cart"
                            aria-controls={CartListId}
                            aria-haspopup="true"
                            onClick={handleCartListOpen}
                            color="inherit"
                        >
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderProductList}
        </div>
    );
}

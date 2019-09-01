import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { graphql } from "babel-plugin-relay/macro";
import { QueryRenderer } from "react-relay";
import Loading from "../Loading";
import environment from "../../relay/Environment";
import { NavBarQuery } from "./__generated__/NavBarQuery.graphql";
import CartProductsList from "../CartProducts/CartProductsList";
import { IconButton, Badge } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1
        },
        title: {
            display: "none",
            [theme.breakpoints.up("sm")]: {
                display: "block"
            }
        },
        sectionCart: {
            [theme.breakpoints.up("md")]: {
                display: "flex"
            }
        }
    })
);

export default function NavBar() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const CartListId = "primary-cart-list-dropdown";

    const handleCartListOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCartListClose = () => {
        setAnchorEl(null);
    };

    return (
        <QueryRenderer<NavBarQuery>
            environment={environment}
            query={UserViewerQuery}
            variables={{}}
            render={({ error, props }): React.ReactNode => {
                if (error) {
                    return <div>Erro ao carregar loja virtual</div>;
                }
                if (!props) {
                    return <Loading />;
                }
                return (
                    <div className={classes.grow}>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography
                                    className={classes.title}
                                    variant="h6"
                                    noWrap
                                >
                                    My MTG Store
                                </Typography>
                                <div className={classes.grow} />
                                <div className={classes.sectionCart}>
                                    <IconButton
                                        aria-label="show products list on cart"
                                        aria-controls={CartListId}
                                        aria-haspopup="true"
                                        onClick={handleCartListOpen}
                                        color="inherit"
                                    >
                                        <Badge
                                            badgeContent={
                                                props.viewer.User!.shoppingCart!
                                                    .cartProducts!.count
                                            }
                                            color="secondary"
                                        >
                                            <ShoppingCartIcon />
                                        </Badge>
                                    </IconButton>
                                </div>
                            </Toolbar>
                        </AppBar>
                        <CartProductsList
                            anchorElOnClose={handleCartListClose}
                            anchorElementReference={anchorEl}
                            shoppingCart={
                                props.viewer.User!.shoppingCart as any
                            }
                        />
                    </div>
                );
            }}
        />
    );
}

const UserViewerQuery = graphql`
    query NavBarQuery {
        viewer {
            User(id: "cjzyfwspn0f1a01671todqxul") {
                name
                id
                shoppingCart {
                    cartProducts {
                        count
                    }
                    ...CartProductsList_shoppingCart
                }
            }
        }
    }
`;

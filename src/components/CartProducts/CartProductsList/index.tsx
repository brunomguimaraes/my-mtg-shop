import React from "react";
import {
    Menu,
    MenuItem,
    Divider,
    Button,
    makeStyles,
    createStyles,
    Theme
} from "@material-ui/core";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import { CartProductsList_shoppingCart } from "./__generated__/CartProductsList_shoppingCart.graphql";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        sectionProceedToCheckout: {
            margin: theme.spacing(3, 1, 1)
        }
    })
);

type IProps = {
    shoppingCart: CartProductsList_shoppingCart;
    anchorElementReference: null | HTMLElement;
    anchorElOnClose: () => void;
};

const CartProductsList = ({
    shoppingCart,
    anchorElementReference,
    anchorElOnClose
}: IProps) => {
    const classes = useStyles();

    React.useEffect(() => {
        setAnchorEl(anchorElementReference);
    }, [anchorElementReference]);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(
        anchorElementReference
    );

    const isCartListOpen = Boolean(anchorEl);
    const DropdownListId = "secondary-cart-list-dropdown";

    function handleCartListClose() {
        anchorElOnClose();
        setAnchorEl(null);
    }
    return (
        <React.Fragment>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                id={DropdownListId}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
                open={isCartListOpen}
                onClose={handleCartListClose}
            >
                {shoppingCart &&
                    shoppingCart!.cartProducts!.edges!.map(
                        (cartProduct) =>
                            cartProduct!.node.quantityOnCart !== 0 && (
                                <MenuItem key={cartProduct!.node.product!.name}>
                                    {cartProduct!.node.quantityOnCart}
                                    {"x "}
                                    {cartProduct!.node.product!.name}
                                    {"  R$"}
                                    {cartProduct!.node.product!.price! *
                                        cartProduct!.node.quantityOnCart}
                                </MenuItem>
                            )
                    )}
                <Divider variant="middle" />
                <div className={classes.sectionProceedToCheckout}>
                    <Button color="primary">Finalizar Compra</Button>
                </div>
            </Menu>
        </React.Fragment>
    );
};

export default createFragmentContainer(CartProductsList, {
    shoppingCart: graphql`
        fragment CartProductsList_shoppingCart on ShoppingCart {
            id
            cartProducts {
                edges {
                    node {
                        quantityOnCart
                        product {
                            name
                            price
                        }
                    }
                }
            }
        }
    `
});

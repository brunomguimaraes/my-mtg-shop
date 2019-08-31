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
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { graphql } from "babel-plugin-relay/macro";
import { createFragmentContainer } from "react-relay";
import { CartProductsList_shoppingCart } from "./__generated__/CartProductsList_shoppingCart.graphql";
import { formatCurrency } from "../../../utils/formaters";
import { uuidVersion4Generator } from "../../../utils/idGenerators";
import { updateCartProduct } from "../../../relay/mutations/UpdateCartProduct";

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
    const clientMutationId = uuidVersion4Generator();

    React.useEffect(() => {
        setAnchorEl(anchorElementReference);
    }, [anchorElementReference]);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(
        anchorElementReference
    );

    const isCartListOpen = Boolean(anchorEl);
    const DropdownListId = "secondary-cart-list-dropdown";

    const handleCartListClose = () => {
        anchorElOnClose();
        setAnchorEl(null);
    };

    const handleIncreaseCartProduct = (
        productId: string,
        numberOnCart: number
    ) => {
        updateCartProduct(clientMutationId, productId, numberOnCart + 1);
    };
    const handleDecreaseCartProduct = (
        productId: string,
        numberOnCart: number
    ) => {
        updateCartProduct(clientMutationId, productId, numberOnCart - 1);
    };

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
                                    <AddCircleIcon
                                        onClick={() =>
                                            handleIncreaseCartProduct(
                                                cartProduct!.node.id,
                                                cartProduct!.node.quantityOnCart
                                            )
                                        }
                                        fontSize="small"
                                    />
                                    <RemoveCircleIcon
                                        onClick={() =>
                                            handleDecreaseCartProduct(
                                                cartProduct!.node.id,
                                                cartProduct!.node.quantityOnCart
                                            )
                                        }
                                        fontSize="small"
                                    />
                                    {cartProduct!.node.quantityOnCart}
                                    {"x "}
                                    {cartProduct!.node.product!.name}
                                    {"  "}
                                    {formatCurrency(
                                        cartProduct!.node.product!.price! *
                                            cartProduct!.node.quantityOnCart
                                    )}
                                </MenuItem>
                            )
                    )}
                <Divider variant="middle" />
                <div className={classes.sectionProceedToCheckout}>
                    <Button color="primary">Finalizar Compra</Button>
                    Valor total:
                    {formatCurrency(
                        shoppingCart!
                            .cartProducts!.edges!.map(
                                (cartProduct) =>
                                    cartProduct!.node.product!.price! *
                                    cartProduct!.node.quantityOnCart
                            )
                            .reduce((totalValue, amount) => totalValue + amount)
                    )}
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
                        id
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

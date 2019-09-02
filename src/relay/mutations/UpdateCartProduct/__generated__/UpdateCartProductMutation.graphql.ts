/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type Colors = "Black" | "Blue" | "Colorless" | "Gold" | "Green" | "Red" | "White" | "%future added value";
export type UpdateCartProductInput = {
    readonly id: string;
    readonly quantityOnCart?: number | null;
    readonly productId?: string | null;
    readonly product?: CartProductproductProduct | null;
    readonly shoppingCartId?: string | null;
    readonly shoppingCart?: CartProductshoppingCartShoppingCart | null;
    readonly clientMutationId: string;
};
export type CartProductproductProduct = {
    readonly cardColor?: Colors | null;
    readonly imgUrl?: string | null;
    readonly name?: string | null;
    readonly price?: number | null;
    readonly quantityInStock?: number | null;
};
export type CartProductshoppingCartShoppingCart = {
    readonly orderId?: string | null;
    readonly order?: ShoppingCartorderOrder | null;
    readonly userId?: string | null;
    readonly user?: ShoppingCartuserUser | null;
    readonly cartProductsIds?: ReadonlyArray<string> | null;
    readonly cartProducts?: ReadonlyArray<ShoppingCartcartProductsCartProduct> | null;
};
export type ShoppingCartorderOrder = {
    readonly isPaid?: boolean | null;
    readonly orderNumber: number;
    readonly userId?: string | null;
    readonly user?: OrderuserUser | null;
};
export type OrderuserUser = {
    readonly name: string;
    readonly shoppingCartId?: string | null;
    readonly shoppingCart?: UsershoppingCartShoppingCart | null;
    readonly creditCardInfoIds?: ReadonlyArray<string> | null;
    readonly creditCardInfo?: ReadonlyArray<UsercreditCardInfoPaymentInfo> | null;
    readonly ordersIds?: ReadonlyArray<string> | null;
    readonly orders?: ReadonlyArray<UserordersOrder> | null;
};
export type UsershoppingCartShoppingCart = {
    readonly orderId?: string | null;
    readonly order?: ShoppingCartorderOrder | null;
    readonly cartProductsIds?: ReadonlyArray<string> | null;
    readonly cartProducts?: ReadonlyArray<ShoppingCartcartProductsCartProduct> | null;
};
export type ShoppingCartcartProductsCartProduct = {
    readonly quantityOnCart?: number | null;
    readonly productId?: string | null;
    readonly product?: CartProductproductProduct | null;
};
export type UsercreditCardInfoPaymentInfo = {
    readonly cardNumber: number;
    readonly cvv: number;
    readonly isValid: boolean;
};
export type UserordersOrder = {
    readonly isPaid?: boolean | null;
    readonly orderNumber: number;
    readonly shoppingCartId?: string | null;
    readonly shoppingCart?: OrdershoppingCartShoppingCart | null;
};
export type OrdershoppingCartShoppingCart = {
    readonly userId?: string | null;
    readonly user?: ShoppingCartuserUser | null;
    readonly cartProductsIds?: ReadonlyArray<string> | null;
    readonly cartProducts?: ReadonlyArray<ShoppingCartcartProductsCartProduct> | null;
};
export type ShoppingCartuserUser = {
    readonly name: string;
    readonly creditCardInfoIds?: ReadonlyArray<string> | null;
    readonly creditCardInfo?: ReadonlyArray<UsercreditCardInfoPaymentInfo> | null;
    readonly ordersIds?: ReadonlyArray<string> | null;
    readonly orders?: ReadonlyArray<UserordersOrder> | null;
};
export type UpdateCartProductMutationVariables = {
    readonly input: UpdateCartProductInput;
};
export type UpdateCartProductMutationResponse = {
    readonly updateCartProduct: {
        readonly clientMutationId: string;
        readonly cartProduct: {
            readonly quantityOnCart: number;
            readonly id: string;
            readonly product: {
                readonly name: string | null;
                readonly quantityInStock: number | null;
            } | null;
        } | null;
        readonly shoppingCart: {
            readonly cartProducts: {
                readonly count: number;
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly quantityOnCart: number;
                        readonly product: {
                            readonly name: string | null;
                            readonly price: number | null;
                            readonly quantityInStock: number | null;
                        } | null;
                    };
                } | null> | null;
            } | null;
        } | null;
    } | null;
};
export type UpdateCartProductMutation = {
    readonly response: UpdateCartProductMutationResponse;
    readonly variables: UpdateCartProductMutationVariables;
};



/*
mutation UpdateCartProductMutation(
  $input: UpdateCartProductInput!
) {
  updateCartProduct(input: $input) {
    clientMutationId
    cartProduct {
      quantityOnCart
      id
      product {
        name
        quantityInStock
        id
      }
    }
    shoppingCart {
      cartProducts {
        count
        edges {
          node {
            quantityOnCart
            product {
              name
              price
              quantityInStock
              id
            }
            id
          }
        }
      }
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateCartProductInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "clientMutationId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "quantityOnCart",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "quantityInStock",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "count",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "price",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateCartProductMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateCartProduct",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCartProductPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "cartProduct",
            "storageKey": null,
            "args": null,
            "concreteType": "CartProduct",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "product",
                "storageKey": null,
                "args": null,
                "concreteType": "Product",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "shoppingCart",
            "storageKey": null,
            "args": null,
            "concreteType": "ShoppingCart",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "cartProducts",
                "storageKey": null,
                "args": null,
                "concreteType": "CartProductConnection",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CartProductEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "CartProduct",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "product",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Product",
                            "plural": false,
                            "selections": [
                              (v5/*: any*/),
                              (v8/*: any*/),
                              (v6/*: any*/)
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateCartProductMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateCartProduct",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCartProductPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "cartProduct",
            "storageKey": null,
            "args": null,
            "concreteType": "CartProduct",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "product",
                "storageKey": null,
                "args": null,
                "concreteType": "Product",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v4/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "shoppingCart",
            "storageKey": null,
            "args": null,
            "concreteType": "ShoppingCart",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "cartProducts",
                "storageKey": null,
                "args": null,
                "concreteType": "CartProductConnection",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CartProductEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "CartProduct",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "product",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Product",
                            "plural": false,
                            "selections": [
                              (v5/*: any*/),
                              (v8/*: any*/),
                              (v6/*: any*/),
                              (v4/*: any*/)
                            ]
                          },
                          (v4/*: any*/)
                        ]
                      }
                    ]
                  }
                ]
              },
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateCartProductMutation",
    "id": null,
    "text": "mutation UpdateCartProductMutation(\n  $input: UpdateCartProductInput!\n) {\n  updateCartProduct(input: $input) {\n    clientMutationId\n    cartProduct {\n      quantityOnCart\n      id\n      product {\n        name\n        quantityInStock\n        id\n      }\n    }\n    shoppingCart {\n      cartProducts {\n        count\n        edges {\n          node {\n            quantityOnCart\n            product {\n              name\n              price\n              quantityInStock\n              id\n            }\n            id\n          }\n        }\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '32f8ed814d40abd81548ea659de9e3a4';
export default node;

/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type Colors = "Black" | "Blue" | "Colorless" | "Gold" | "Green" | "Red" | "White" | "%future added value";
export type CreateOrderInput = {
    readonly isPaid?: boolean | null;
    readonly totalOrderValue: number;
    readonly userId?: string | null;
    readonly user?: OrderuserUser | null;
    readonly productsIds?: ReadonlyArray<string> | null;
    readonly products?: ReadonlyArray<OrderproductsProduct> | null;
    readonly clientMutationId: string;
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
    readonly cartProductsIds?: ReadonlyArray<string> | null;
    readonly cartProducts?: ReadonlyArray<ShoppingCartcartProductsCartProduct> | null;
};
export type ShoppingCartcartProductsCartProduct = {
    readonly quantityOnCart?: number | null;
    readonly productId?: string | null;
    readonly product?: CartProductproductProduct | null;
};
export type CartProductproductProduct = {
    readonly cardColor?: Colors | null;
    readonly cardType?: string | null;
    readonly description?: string | null;
    readonly imgUrl?: string | null;
    readonly name?: string | null;
    readonly price?: number | null;
    readonly quantityInStock?: number | null;
    readonly orderId?: string | null;
    readonly order?: ProductorderOrder | null;
};
export type ProductorderOrder = {
    readonly isPaid?: boolean | null;
    readonly totalOrderValue: number;
    readonly userId?: string | null;
    readonly user?: OrderuserUser | null;
    readonly productsIds?: ReadonlyArray<string> | null;
    readonly products?: ReadonlyArray<OrderproductsProduct> | null;
};
export type OrderproductsProduct = {
    readonly cardColor?: Colors | null;
    readonly cardType?: string | null;
    readonly description?: string | null;
    readonly imgUrl?: string | null;
    readonly name?: string | null;
    readonly price?: number | null;
    readonly quantityInStock?: number | null;
    readonly cartProductId?: string | null;
    readonly cartProduct?: ProductcartProductCartProduct | null;
};
export type ProductcartProductCartProduct = {
    readonly quantityOnCart?: number | null;
    readonly shoppingCartId?: string | null;
    readonly shoppingCart?: CartProductshoppingCartShoppingCart | null;
};
export type CartProductshoppingCartShoppingCart = {
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
export type UsercreditCardInfoPaymentInfo = {
    readonly cardNumber: number;
    readonly cvv: number;
    readonly isValid: boolean;
};
export type UserordersOrder = {
    readonly isPaid?: boolean | null;
    readonly totalOrderValue: number;
    readonly productsIds?: ReadonlyArray<string> | null;
    readonly products?: ReadonlyArray<OrderproductsProduct> | null;
};
export type CreateOrderMutationVariables = {
    readonly input: CreateOrderInput;
};
export type CreateOrderMutationResponse = {
    readonly createOrder: {
        readonly clientMutationId: string;
        readonly order: {
            readonly id: string;
            readonly products: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly id: string;
                        readonly name: string | null;
                    };
                } | null> | null;
            } | null;
            readonly totalOrderValue: number;
            readonly isPaid: boolean;
        } | null;
    } | null;
};
export type CreateOrderMutation = {
    readonly response: CreateOrderMutationResponse;
    readonly variables: CreateOrderMutationVariables;
};



/*
mutation CreateOrderMutation(
  $input: CreateOrderInput!
) {
  createOrder(input: $input) {
    clientMutationId
    order {
      id
      products {
        edges {
          node {
            id
            name
          }
        }
      }
      totalOrderValue
      isPaid
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateOrderInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createOrder",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateOrderPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "order",
        "storageKey": null,
        "args": null,
        "concreteType": "Order",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "products",
            "storageKey": null,
            "args": null,
            "concreteType": "ProductConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "ProductEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Product",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "name",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "totalOrderValue",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isPaid",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateOrderMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateOrderMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateOrderMutation",
    "id": null,
    "text": "mutation CreateOrderMutation(\n  $input: CreateOrderInput!\n) {\n  createOrder(input: $input) {\n    clientMutationId\n    order {\n      id\n      products {\n        edges {\n          node {\n            id\n            name\n          }\n        }\n      }\n      totalOrderValue\n      isPaid\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '3a666f0acedd9957ade7e34129ecef3d';
export default node;

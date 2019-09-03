/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type Colors = "Black" | "Blue" | "Colorless" | "Gold" | "Green" | "Red" | "White" | "%future added value";
export type UpdateProductInput = {
    readonly cardColor?: Colors | null;
    readonly cardType?: string | null;
    readonly description?: string | null;
    readonly id: string;
    readonly imgUrl?: string | null;
    readonly name?: string | null;
    readonly price?: number | null;
    readonly quantityInStock?: number | null;
    readonly cartProductId?: string | null;
    readonly cartProduct?: ProductcartProductCartProduct | null;
    readonly orderId?: string | null;
    readonly order?: ProductorderOrder | null;
    readonly clientMutationId: string;
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
export type UpdateProductMutationVariables = {
    readonly input: UpdateProductInput;
};
export type UpdateProductMutationResponse = {
    readonly updateProduct: {
        readonly clientMutationId: string;
        readonly product: {
            readonly id: string;
            readonly quantityInStock: number | null;
        } | null;
    } | null;
};
export type UpdateProductMutation = {
    readonly response: UpdateProductMutationResponse;
    readonly variables: UpdateProductMutationVariables;
};



/*
mutation UpdateProductMutation(
  $input: UpdateProductInput!
) {
  updateProduct(input: $input) {
    clientMutationId
    product {
      id
      quantityInStock
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateProductInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateProduct",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateProductPayload",
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
        "name": "product",
        "storageKey": null,
        "args": null,
        "concreteType": "Product",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "quantityInStock",
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
    "name": "UpdateProductMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateProductMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateProductMutation",
    "id": null,
    "text": "mutation UpdateProductMutation(\n  $input: UpdateProductInput!\n) {\n  updateProduct(input: $input) {\n    clientMutationId\n    product {\n      id\n      quantityInStock\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '52525b57a99fb822aa501674ec949788';
export default node;

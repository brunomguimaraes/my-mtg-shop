/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { CheckoutList_shoppingCart$ref } from "./CheckoutList_shoppingCart.graphql";
import { CreditCardList_creditCardInfo$ref } from "./CreditCardList_creditCardInfo.graphql";
declare const _CheckoutCard_user$ref: unique symbol;
export type CheckoutCard_user$ref = typeof _CheckoutCard_user$ref;
export type CheckoutCard_user = {
  readonly name: string;
  readonly id: string;
  readonly shoppingCart: {
    readonly cartProducts: ReadonlyArray<{
      readonly id: string;
      readonly quantityOnCart: number | null;
      readonly product: {
        readonly id: string;
        readonly name: string | null;
        readonly price: number | null;
        readonly quantityInStock: number | null;
      } | null;
    } | null> | null;
    readonly " $fragmentRefs": CheckoutList_shoppingCart$ref;
  } | null;
  readonly creditCardInfo: ReadonlyArray<{
    readonly cardNumber: number;
    readonly cvv: number;
    readonly id: string;
    readonly isValid: boolean;
  }>;
  readonly " $fragmentRefs": CreditCardList_creditCardInfo$ref;
  readonly " $refType": CheckoutCard_user$ref;
};

const node: ReaderFragment = (function() {
  var v0 = {
      kind: "ScalarField",
      alias: null,
      name: "name",
      args: null,
      storageKey: null
    },
    v1 = {
      kind: "ScalarField",
      alias: null,
      name: "id",
      args: null,
      storageKey: null
    };
  return {
    kind: "Fragment",
    name: "CheckoutCard_user",
    type: "User",
    metadata: null,
    argumentDefinitions: [],
    selections: [
      v0 /*: any*/,
      v1 /*: any*/,
      {
        kind: "LinkedField",
        alias: null,
        name: "shoppingCart",
        storageKey: null,
        args: null,
        concreteType: "ShoppingCart",
        plural: false,
        selections: [
          {
            kind: "LinkedField",
            alias: null,
            name: "cartProducts",
            storageKey: null,
            args: null,
            concreteType: "CartProduct",
            plural: true,
            selections: [
              v1 /*: any*/,
              {
                kind: "ScalarField",
                alias: null,
                name: "quantityOnCart",
                args: null,
                storageKey: null
              },
              {
                kind: "LinkedField",
                alias: null,
                name: "product",
                storageKey: null,
                args: null,
                concreteType: "Product",
                plural: false,
                selections: [
                  v1 /*: any*/,
                  v0 /*: any*/,
                  {
                    kind: "ScalarField",
                    alias: null,
                    name: "price",
                    args: null,
                    storageKey: null
                  },
                  {
                    kind: "ScalarField",
                    alias: null,
                    name: "quantityInStock",
                    args: null,
                    storageKey: null
                  }
                ]
              }
            ]
          },
          {
            kind: "FragmentSpread",
            name: "CheckoutList_shoppingCart",
            args: null
          }
        ]
      },
      {
        kind: "LinkedField",
        alias: null,
        name: "creditCardInfo",
        storageKey: null,
        args: null,
        concreteType: "PaymentInfo",
        plural: true,
        selections: [
          {
            kind: "ScalarField",
            alias: null,
            name: "cardNumber",
            args: null,
            storageKey: null
          },
          {
            kind: "ScalarField",
            alias: null,
            name: "cvv",
            args: null,
            storageKey: null
          },
          v1 /*: any*/,
          {
            kind: "ScalarField",
            alias: null,
            name: "isValid",
            args: null,
            storageKey: null
          }
        ]
      },
      {
        kind: "FragmentSpread",
        name: "CreditCardList_creditCardInfo",
        args: null
      }
    ]
  };
})();
(node as any).hash = "9cfee96e479c220738fc37ccee2cdd2b";
export default node;

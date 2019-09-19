/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type CartProductsList_shoppingCart$ref = any;
export type CartProductsList_shoppingCart = {
  readonly id: string;
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
  readonly " $refType": CartProductsList_shoppingCart$ref;
};

const node: ReaderFragment = (function() {
  var v0 = {
    kind: "ScalarField",
    alias: null,
    name: "id",
    args: null,
    storageKey: null
  };
  return {
    kind: "Fragment",
    name: "CartProductsList_shoppingCart",
    type: "ShoppingCart",
    metadata: null,
    argumentDefinitions: [],
    selections: [
      v0 /*: any*/,
      {
        kind: "LinkedField",
        alias: null,
        name: "cartProducts",
        storageKey: null,
        args: null,
        concreteType: "CartProduct",
        plural: true,
        selections: [
          v0 /*: any*/,
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
              v0 /*: any*/,
              {
                kind: "ScalarField",
                alias: null,
                name: "name",
                args: null,
                storageKey: null
              },
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
      }
    ]
  };
})();
(node as any).hash = "18dfd9844004e755d54abac10f29ef0b";
export default node;

/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type ProductsList_shoppingCart$ref = any;
export type ProductsList_shoppingCart = {
  readonly id: string;
  readonly cartProducts: ReadonlyArray<{
    readonly id: string;
    readonly quantityOnCart: number | null;
    readonly product: {
      readonly id: string;
    } | null;
  } | null> | null;
  readonly " $refType": ProductsList_shoppingCart$ref;
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
    name: "ProductsList_shoppingCart",
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
            selections: [v0 /*: any*/]
          }
        ]
      }
    ]
  };
})();
(node as any).hash = "585c0e3d3481856e212a71716efb33b4";
export default node;

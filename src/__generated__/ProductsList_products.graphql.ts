/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { DetailedProductCard_product$ref } from "./DetailedProductCard_product.graphql";
declare const _ProductsList_products$ref: unique symbol;
export type ProductsList_products$ref = typeof _ProductsList_products$ref;
export type ProductsList_products = {
  readonly products: ReadonlyArray<{
    readonly " $fragmentRefs": DetailedProductCard_product$ref;
  }>;
  readonly " $refType": ProductsList_products$ref;
};

const node: ReaderFragment = {
  kind: "Fragment",
  name: "ProductsList_products",
  type: "Query",
  metadata: null,
  argumentDefinitions: [],
  selections: [
    {
      kind: "LinkedField",
      alias: null,
      name: "products",
      storageKey: null,
      args: null,
      concreteType: "Product",
      plural: true,
      selections: [
        {
          kind: "FragmentSpread",
          name: "DetailedProductCard_product",
          args: null
        }
      ]
    }
  ]
};
(node as any).hash = "03c30a1e14afb4d07bdea832cdca9f87";
export default node;
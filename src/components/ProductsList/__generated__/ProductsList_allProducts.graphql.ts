/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type DetailedProductCard_product$ref = any;
export type ProductsList_allProducts$ref = any;
export type ProductsList_allProducts = {
    readonly count: number;
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly " $fragmentRefs": DetailedProductCard_product$ref;
        };
    } | null> | null;
    readonly " $refType": ProductsList_allProducts$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ProductsList_allProducts",
  "type": "ProductConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "count",
      "args": null,
      "storageKey": null
    },
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
            {
              "kind": "FragmentSpread",
              "name": "DetailedProductCard_product",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
(node as any).hash = '30176634ffc79ee9fa64a3bb849c5be2';
export default node;

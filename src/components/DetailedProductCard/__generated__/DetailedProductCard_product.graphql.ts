/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type DetailedProductCard_product$ref = any;
export type DetailedProductCard_product = {
    readonly id: string;
    readonly imgUrl: string | null;
    readonly name: string;
    readonly price: number | null;
    readonly quantityInStock: number | null;
    readonly " $refType": DetailedProductCard_product$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "DetailedProductCard_product",
  "type": "Product",
  "metadata": null,
  "argumentDefinitions": [],
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
      "name": "imgUrl",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "price",
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
};
(node as any).hash = '26dcb9ea07362f64358c82248cfbd838';
export default node;

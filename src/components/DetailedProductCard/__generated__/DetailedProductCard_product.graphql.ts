/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type Colors = "Black" | "Blue" | "Colorless" | "Gold" | "Green" | "Red" | "White" | "%future added value";
export type DetailedProductCard_product$ref = any;
export type DetailedProductCard_product = {
    readonly id: string;
    readonly imgUrl: string | null;
    readonly name: string | null;
    readonly price: number | null;
    readonly quantityInStock: number | null;
    readonly cardColor: Colors | null;
    readonly description: string | null;
    readonly cardType: string | null;
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "cardColor",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "cardType",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '9bc498629e96a2c39353ddcff0063045';
export default node;

/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type CartProductsList_shoppingCart$ref = any;
export type CartProductsList_shoppingCart = {
    readonly id: string;
    readonly cartProducts: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly quantityOnCart: number;
                readonly product: {
                    readonly name: string;
                    readonly price: number | null;
                } | null;
            };
        } | null> | null;
    } | null;
    readonly " $refType": CartProductsList_shoppingCart$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CartProductsList_shoppingCart",
  "type": "ShoppingCart",
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
      "kind": "LinkedField",
      "alias": null,
      "name": "cartProducts",
      "storageKey": null,
      "args": null,
      "concreteType": "CartProductConnection",
      "plural": false,
      "selections": [
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
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "quantityOnCart",
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
};
(node as any).hash = 'c298907259281df6e5467f1d900caf26';
export default node;

/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type CartProductsList_shoppingCart$ref = any;
export type NavBar_viewer$ref = any;
export type NavBar_viewer = {
    readonly User: {
        readonly name: string;
        readonly id: string;
        readonly shoppingCart: {
            readonly cartProducts: {
                readonly count: number;
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly quantityOnCart: number;
                    };
                } | null> | null;
            } | null;
            readonly " $fragmentRefs": CartProductsList_shoppingCart$ref;
        } | null;
    } | null;
    readonly " $refType": NavBar_viewer$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "NavBar_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "User",
      "storageKey": "User(id:\"cjzyfwspn0f1a01671todqxul\")",
      "args": [
        {
          "kind": "Literal",
          "name": "id",
          "value": "cjzyfwspn0f1a01671todqxul"
        }
      ],
      "concreteType": "User",
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
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "shoppingCart",
          "storageKey": null,
          "args": null,
          "concreteType": "ShoppingCart",
          "plural": false,
          "selections": [
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
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "kind": "FragmentSpread",
              "name": "CartProductsList_shoppingCart",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
(node as any).hash = '01ea1875eb7a4265d5016f4f2a9ac22e';
export default node;

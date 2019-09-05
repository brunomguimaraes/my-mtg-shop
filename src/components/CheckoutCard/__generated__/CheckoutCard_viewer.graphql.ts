/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type CheckoutList_shoppingCart$ref = any;
type CreditCardList_creditCardInfo$ref = any;
export type CheckoutCard_viewer$ref = any;
export type CheckoutCard_viewer = {
    readonly User: {
        readonly name: string;
        readonly id: string;
        readonly shoppingCart: {
            readonly cartProducts: {
                readonly count: number;
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly id: string;
                        readonly quantityOnCart: number;
                        readonly product: {
                            readonly id: string;
                            readonly name: string | null;
                            readonly price: number | null;
                            readonly quantityInStock: number | null;
                        } | null;
                    };
                } | null> | null;
            } | null;
            readonly " $fragmentRefs": CheckoutList_shoppingCart$ref;
        } | null;
        readonly creditCardInfo: {
            readonly " $fragmentRefs": CreditCardList_creditCardInfo$ref;
        } | null;
    } | null;
    readonly " $refType": CheckoutCard_viewer$ref;
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "CheckoutCard_viewer",
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
        (v0/*: any*/),
        (v1/*: any*/),
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
                        (v1/*: any*/),
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
                            (v1/*: any*/),
                            (v0/*: any*/),
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
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "kind": "FragmentSpread",
              "name": "CheckoutList_shoppingCart",
              "args": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "creditCardInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PaymentInfoConnection",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "CreditCardList_creditCardInfo",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
})();
(node as any).hash = '6836916353c0c57dbaaa7623ebea89af';
export default node;

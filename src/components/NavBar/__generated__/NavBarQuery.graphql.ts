/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type CartProductsList_shoppingCart$ref = any;
export type NavBarQueryVariables = {};
export type NavBarQueryResponse = {
    readonly viewer: {
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
    };
};
export type NavBarQuery = {
    readonly response: NavBarQueryResponse;
    readonly variables: NavBarQueryVariables;
};



/*
query NavBarQuery {
  viewer {
    User(id: "cjzyfwspn0f1a01671todqxul") {
      name
      id
      shoppingCart {
        cartProducts {
          count
          edges {
            node {
              quantityOnCart
              id
            }
          }
        }
        ...CartProductsList_shoppingCart
        id
      }
    }
    id
  }
}

fragment CartProductsList_shoppingCart on ShoppingCart {
  id
  cartProducts {
    edges {
      node {
        quantityOnCart
        product {
          name
          price
          id
        }
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "cjzyfwspn0f1a01671todqxul"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "count",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "quantityOnCart",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "NavBarQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "User",
            "storageKey": "User(id:\"cjzyfwspn0f1a01671todqxul\")",
            "args": (v0/*: any*/),
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
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
                      (v3/*: any*/),
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
                              (v4/*: any*/)
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
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NavBarQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "User",
            "storageKey": "User(id:\"cjzyfwspn0f1a01671todqxul\")",
            "args": (v0/*: any*/),
            "concreteType": "User",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
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
                      (v3/*: any*/),
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
                              (v4/*: any*/),
                              (v2/*: any*/),
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
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "price",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  (v2/*: any*/)
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  (v2/*: any*/)
                ]
              }
            ]
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "NavBarQuery",
    "id": null,
    "text": "query NavBarQuery {\n  viewer {\n    User(id: \"cjzyfwspn0f1a01671todqxul\") {\n      name\n      id\n      shoppingCart {\n        cartProducts {\n          count\n          edges {\n            node {\n              quantityOnCart\n              id\n            }\n          }\n        }\n        ...CartProductsList_shoppingCart\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment CartProductsList_shoppingCart on ShoppingCart {\n  id\n  cartProducts {\n    edges {\n      node {\n        quantityOnCart\n        product {\n          name\n          price\n          id\n        }\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '9c3481544c1bfa7e9b7ecc5b61b788c1';
export default node;

/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type NavBar_viewer$ref = any;
export type CheckoutQueryVariables = {};
export type CheckoutQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": NavBar_viewer$ref;
    };
};
export type CheckoutQuery = {
    readonly response: CheckoutQueryResponse;
    readonly variables: CheckoutQueryVariables;
};



/*
query CheckoutQuery {
  viewer {
    ...NavBar_viewer
    id
  }
}

fragment NavBar_viewer on Viewer {
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
}

fragment CartProductsList_shoppingCart on ShoppingCart {
  id
  cartProducts {
    count
    edges {
      node {
        id
        quantityOnCart
        product {
          id
          name
          price
          quantityInStock
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
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
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CheckoutQuery",
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
            "kind": "FragmentSpread",
            "name": "NavBar_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CheckoutQuery",
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
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "quantityOnCart",
                                "args": null,
                                "storageKey": null
                              },
                              (v1/*: any*/),
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
                  (v1/*: any*/)
                ]
              }
            ]
          },
          (v1/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CheckoutQuery",
    "id": null,
    "text": "query CheckoutQuery {\n  viewer {\n    ...NavBar_viewer\n    id\n  }\n}\n\nfragment NavBar_viewer on Viewer {\n  User(id: \"cjzyfwspn0f1a01671todqxul\") {\n    name\n    id\n    shoppingCart {\n      cartProducts {\n        count\n        edges {\n          node {\n            quantityOnCart\n            id\n          }\n        }\n      }\n      ...CartProductsList_shoppingCart\n      id\n    }\n  }\n}\n\nfragment CartProductsList_shoppingCart on ShoppingCart {\n  id\n  cartProducts {\n    count\n    edges {\n      node {\n        id\n        quantityOnCart\n        product {\n          id\n          name\n          price\n          quantityInStock\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '41d327f0634d19455a3d49664ebd94c3';
export default node;

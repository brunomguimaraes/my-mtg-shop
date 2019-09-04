/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type NavBar_viewer$ref = any;
type ProductsList_allProducts$ref = any;
type ProductsList_shoppingCart$ref = any;
export type MainQueryVariables = {};
export type MainQueryResponse = {
    readonly viewer: {
        readonly allProducts: {
            readonly " $fragmentRefs": ProductsList_allProducts$ref;
        };
        readonly User: {
            readonly shoppingCart: {
                readonly " $fragmentRefs": ProductsList_shoppingCart$ref;
            } | null;
        } | null;
        readonly " $fragmentRefs": NavBar_viewer$ref;
    };
};
export type MainQuery = {
    readonly response: MainQueryResponse;
    readonly variables: MainQueryVariables;
};



/*
query MainQuery {
  viewer {
    ...NavBar_viewer
    allProducts {
      ...ProductsList_allProducts
    }
    User(id: "cjzyfwspn0f1a01671todqxul") {
      shoppingCart {
        ...ProductsList_shoppingCart
        id
      }
      id
    }
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

fragment ProductsList_allProducts on ProductConnection {
  count
  edges {
    node {
      ...DetailedProductCard_product
      id
    }
  }
}

fragment ProductsList_shoppingCart on ShoppingCart {
  id
  cartProducts {
    edges {
      node {
        id
        quantityOnCart
        product {
          id
        }
      }
    }
  }
}

fragment DetailedProductCard_product on Product {
  id
  imgUrl
  name
  price
  quantityInStock
  cardColor
  description
  cardType
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
  "name": "price",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "quantityInStock",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MainQuery",
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
            "name": "allProducts",
            "storageKey": null,
            "args": null,
            "concreteType": "ProductConnection",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "ProductsList_allProducts",
                "args": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "User",
            "storageKey": "User(id:\"cjzyfwspn0f1a01671todqxul\")",
            "args": (v0/*: any*/),
            "concreteType": "User",
            "plural": false,
            "selections": [
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
                    "kind": "FragmentSpread",
                    "name": "ProductsList_shoppingCart",
                    "args": null
                  }
                ]
              }
            ]
          },
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
    "name": "MainQuery",
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
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "quantityOnCart",
                                "args": null,
                                "storageKey": null
                              },
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
                                  (v2/*: any*/),
                                  (v1/*: any*/),
                                  (v4/*: any*/),
                                  (v5/*: any*/)
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "allProducts",
            "storageKey": null,
            "args": null,
            "concreteType": "ProductConnection",
            "plural": false,
            "selections": [
              (v3/*: any*/),
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
                      (v2/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "imgUrl",
                        "args": null,
                        "storageKey": null
                      },
                      (v1/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/),
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
  "params": {
    "operationKind": "query",
    "name": "MainQuery",
    "id": null,
    "text": "query MainQuery {\n  viewer {\n    ...NavBar_viewer\n    allProducts {\n      ...ProductsList_allProducts\n    }\n    User(id: \"cjzyfwspn0f1a01671todqxul\") {\n      shoppingCart {\n        ...ProductsList_shoppingCart\n        id\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment NavBar_viewer on Viewer {\n  User(id: \"cjzyfwspn0f1a01671todqxul\") {\n    name\n    id\n    shoppingCart {\n      cartProducts {\n        count\n        edges {\n          node {\n            quantityOnCart\n            id\n          }\n        }\n      }\n      ...CartProductsList_shoppingCart\n      id\n    }\n  }\n}\n\nfragment ProductsList_allProducts on ProductConnection {\n  count\n  edges {\n    node {\n      ...DetailedProductCard_product\n      id\n    }\n  }\n}\n\nfragment ProductsList_shoppingCart on ShoppingCart {\n  id\n  cartProducts {\n    edges {\n      node {\n        id\n        quantityOnCart\n        product {\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment DetailedProductCard_product on Product {\n  id\n  imgUrl\n  name\n  price\n  quantityInStock\n  cardColor\n  description\n  cardType\n}\n\nfragment CartProductsList_shoppingCart on ShoppingCart {\n  id\n  cartProducts {\n    count\n    edges {\n      node {\n        id\n        quantityOnCart\n        product {\n          id\n          name\n          price\n          quantityInStock\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '77e82011455e1d328eb8455bab7e07a6';
export default node;
/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type ProductsList_allProducts$ref = any;
export type AppQueryVariables = {};
export type AppQueryResponse = {
    readonly viewer: {
        readonly allProducts: {
            readonly " $fragmentRefs": ProductsList_allProducts$ref;
        };
    };
};
export type AppQuery = {
    readonly response: AppQueryResponse;
    readonly variables: AppQueryVariables;
};



/*
query AppQuery {
  viewer {
    allProducts {
      ...ProductsList_allProducts
    }
    id
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

fragment DetailedProductCard_product on Product {
  id
  imgUrl
  name
  price
  quantityInStock
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
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
    "name": "AppQuery",
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
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
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
                      (v0/*: any*/),
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
                  }
                ]
              }
            ]
          },
          (v0/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  viewer {\n    allProducts {\n      ...ProductsList_allProducts\n    }\n    id\n  }\n}\n\nfragment ProductsList_allProducts on ProductConnection {\n  count\n  edges {\n    node {\n      ...DetailedProductCard_product\n      id\n    }\n  }\n}\n\nfragment DetailedProductCard_product on Product {\n  id\n  imgUrl\n  name\n  price\n  quantityInStock\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '6b1a773e3d382e5e6479c52dbafaa502';
export default node;

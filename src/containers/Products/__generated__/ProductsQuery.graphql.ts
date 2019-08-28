/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type ProductsQueryVariables = {};
export type ProductsQueryResponse = {
    readonly viewer: {
        readonly allProducts: {
            readonly count: number;
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly name: string;
                    readonly price: number | null;
                    readonly id: string;
                    readonly imgUrl: string | null;
                    readonly quantity: number | null;
                };
            } | null> | null;
        };
    };
};
export type ProductsQuery = {
    readonly response: ProductsQueryResponse;
    readonly variables: ProductsQueryVariables;
};



/*
query ProductsQuery {
  viewer {
    allProducts {
      count
      edges {
        node {
          name
          price
          id
          imgUrl
          quantity
        }
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
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
              "name": "quantity",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProductsQuery",
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
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProductsQuery",
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
          (v1/*: any*/),
          (v0/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProductsQuery",
    "id": null,
    "text": "query ProductsQuery {\n  viewer {\n    allProducts {\n      count\n      edges {\n        node {\n          name\n          price\n          id\n          imgUrl\n          quantity\n        }\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'd04cf4d274831daea880e56873af218c';
export default node;

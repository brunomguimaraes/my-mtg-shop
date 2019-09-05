/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type DeleteCartProductInput = {
    readonly id: string;
    readonly clientMutationId: string;
};
export type DeleteCartProductMutationVariables = {
    readonly input: DeleteCartProductInput;
};
export type DeleteCartProductMutationResponse = {
    readonly deleteCartProduct: {
        readonly clientMutationId: string;
        readonly cartProduct: {
            readonly quantityOnCart: number;
            readonly id: string;
            readonly product: {
                readonly name: string | null;
                readonly quantityInStock: number | null;
            } | null;
        } | null;
        readonly shoppingCart: {
            readonly cartProducts: {
                readonly count: number;
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly quantityOnCart: number;
                        readonly product: {
                            readonly name: string | null;
                            readonly price: number | null;
                            readonly quantityInStock: number | null;
                        } | null;
                    };
                } | null> | null;
            } | null;
        } | null;
    } | null;
};
export type DeleteCartProductMutation = {
    readonly response: DeleteCartProductMutationResponse;
    readonly variables: DeleteCartProductMutationVariables;
};



/*
mutation DeleteCartProductMutation(
  $input: DeleteCartProductInput!
) {
  deleteCartProduct(input: $input) {
    clientMutationId
    cartProduct {
      quantityOnCart
      id
      product {
        name
        quantityInStock
        id
      }
    }
    shoppingCart {
      cartProducts {
        count
        edges {
          node {
            quantityOnCart
            product {
              name
              price
              quantityInStock
              id
            }
            id
          }
        }
      }
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteCartProductInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "clientMutationId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "quantityOnCart",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "quantityInStock",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "count",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "price",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteCartProductMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteCartProduct",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCartProductPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "cartProduct",
            "storageKey": null,
            "args": null,
            "concreteType": "CartProduct",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "product",
                "storageKey": null,
                "args": null,
                "concreteType": "Product",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/)
                ]
              }
            ]
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
                  (v7/*: any*/),
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
                          (v3/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "product",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Product",
                            "plural": false,
                            "selections": [
                              (v5/*: any*/),
                              (v8/*: any*/),
                              (v6/*: any*/)
                            ]
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
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteCartProductMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteCartProduct",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCartProductPayload",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "cartProduct",
            "storageKey": null,
            "args": null,
            "concreteType": "CartProduct",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "product",
                "storageKey": null,
                "args": null,
                "concreteType": "Product",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v4/*: any*/)
                ]
              }
            ]
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
                  (v7/*: any*/),
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
                          (v3/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "product",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Product",
                            "plural": false,
                            "selections": [
                              (v5/*: any*/),
                              (v8/*: any*/),
                              (v6/*: any*/),
                              (v4/*: any*/)
                            ]
                          },
                          (v4/*: any*/)
                        ]
                      }
                    ]
                  }
                ]
              },
              (v4/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteCartProductMutation",
    "id": null,
    "text": "mutation DeleteCartProductMutation(\n  $input: DeleteCartProductInput!\n) {\n  deleteCartProduct(input: $input) {\n    clientMutationId\n    cartProduct {\n      quantityOnCart\n      id\n      product {\n        name\n        quantityInStock\n        id\n      }\n    }\n    shoppingCart {\n      cartProducts {\n        count\n        edges {\n          node {\n            quantityOnCart\n            product {\n              name\n              price\n              quantityInStock\n              id\n            }\n            id\n          }\n        }\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'eaa27a0fe5e4b1ea50b4cc55f91ce53c';
export default node;

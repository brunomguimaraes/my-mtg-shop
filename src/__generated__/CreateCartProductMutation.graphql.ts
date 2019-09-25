/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type CreateCartProductInput = {
  readonly productId?: string | null;
  readonly quantityOnCart?: number | null;
  readonly shoppingCartId?: string | null;
};
export type CreateCartProductMutationVariables = {
  readonly input: CreateCartProductInput;
};
export type CreateCartProductMutationResponse = {
  readonly createCartProduct: {
    readonly quantityOnCart: number | null;
    readonly id: string;
    readonly product: {
      readonly name: string | null;
      readonly quantityInStock: number | null;
    } | null;
    readonly shoppingCart: {
      readonly cartProducts: ReadonlyArray<{
        readonly quantityOnCart: number | null;
        readonly product: {
          readonly name: string | null;
          readonly price: number | null;
          readonly quantityInStock: number | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};
export type CreateCartProductMutation = {
  readonly response: CreateCartProductMutationResponse;
  readonly variables: CreateCartProductMutationVariables;
};

/*
mutation CreateCartProductMutation(
  $input: CreateCartProductInput!
) {
  createCartProduct(input: $input) {
    quantityOnCart
    id
    product {
      name
      quantityInStock
      id
    }
    shoppingCart {
      cartProducts {
        quantityOnCart
        product {
          name
          price
          quantityInStock
          id
        }
        id
      }
      id
    }
  }
}
*/

const node: ConcreteRequest = (function() {
  var v0 = [
      {
        kind: "LocalArgument",
        name: "input",
        type: "CreateCartProductInput!",
        defaultValue: null
      }
    ],
    v1 = [
      {
        kind: "Variable",
        name: "input",
        variableName: "input"
      }
    ],
    v2 = {
      kind: "ScalarField",
      alias: null,
      name: "quantityOnCart",
      args: null,
      storageKey: null
    },
    v3 = {
      kind: "ScalarField",
      alias: null,
      name: "id",
      args: null,
      storageKey: null
    },
    v4 = {
      kind: "ScalarField",
      alias: null,
      name: "name",
      args: null,
      storageKey: null
    },
    v5 = {
      kind: "ScalarField",
      alias: null,
      name: "quantityInStock",
      args: null,
      storageKey: null
    },
    v6 = {
      kind: "ScalarField",
      alias: null,
      name: "price",
      args: null,
      storageKey: null
    };
  return {
    kind: "Request",
    fragment: {
      kind: "Fragment",
      name: "CreateCartProductMutation",
      type: "Mutation",
      metadata: null,
      argumentDefinitions: v0 /*: any*/,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "createCartProduct",
          storageKey: null,
          args: v1 /*: any*/,
          concreteType: "CartProductResponse",
          plural: false,
          selections: [
            v2 /*: any*/,
            v3 /*: any*/,
            {
              kind: "LinkedField",
              alias: null,
              name: "product",
              storageKey: null,
              args: null,
              concreteType: "Product",
              plural: false,
              selections: [v4 /*: any*/, v5 /*: any*/]
            },
            {
              kind: "LinkedField",
              alias: null,
              name: "shoppingCart",
              storageKey: null,
              args: null,
              concreteType: "ShoppingCart",
              plural: false,
              selections: [
                {
                  kind: "LinkedField",
                  alias: null,
                  name: "cartProducts",
                  storageKey: null,
                  args: null,
                  concreteType: "CartProduct",
                  plural: true,
                  selections: [
                    v2 /*: any*/,
                    {
                      kind: "LinkedField",
                      alias: null,
                      name: "product",
                      storageKey: null,
                      args: null,
                      concreteType: "Product",
                      plural: false,
                      selections: [v4 /*: any*/, v6 /*: any*/, v5 /*: any*/]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    operation: {
      kind: "Operation",
      name: "CreateCartProductMutation",
      argumentDefinitions: v0 /*: any*/,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "createCartProduct",
          storageKey: null,
          args: v1 /*: any*/,
          concreteType: "CartProductResponse",
          plural: false,
          selections: [
            v2 /*: any*/,
            v3 /*: any*/,
            {
              kind: "LinkedField",
              alias: null,
              name: "product",
              storageKey: null,
              args: null,
              concreteType: "Product",
              plural: false,
              selections: [v4 /*: any*/, v5 /*: any*/, v3 /*: any*/]
            },
            {
              kind: "LinkedField",
              alias: null,
              name: "shoppingCart",
              storageKey: null,
              args: null,
              concreteType: "ShoppingCart",
              plural: false,
              selections: [
                {
                  kind: "LinkedField",
                  alias: null,
                  name: "cartProducts",
                  storageKey: null,
                  args: null,
                  concreteType: "CartProduct",
                  plural: true,
                  selections: [
                    v2 /*: any*/,
                    {
                      kind: "LinkedField",
                      alias: null,
                      name: "product",
                      storageKey: null,
                      args: null,
                      concreteType: "Product",
                      plural: false,
                      selections: [
                        v4 /*: any*/,
                        v6 /*: any*/,
                        v5 /*: any*/,
                        v3 /*: any*/
                      ]
                    },
                    v3 /*: any*/
                  ]
                },
                v3 /*: any*/
              ]
            }
          ]
        }
      ]
    },
    params: {
      operationKind: "mutation",
      name: "CreateCartProductMutation",
      id: null,
      text:
        "mutation CreateCartProductMutation(\n  $input: CreateCartProductInput!\n) {\n  createCartProduct(input: $input) {\n    quantityOnCart\n    id\n    product {\n      name\n      quantityInStock\n      id\n    }\n    shoppingCart {\n      cartProducts {\n        quantityOnCart\n        product {\n          name\n          price\n          quantityInStock\n          id\n        }\n        id\n      }\n      id\n    }\n  }\n}\n",
      metadata: {}
    }
  };
})();
(node as any).hash = "58f15f0e055739e7b72d04d1bfcfd7ec";
export default node;

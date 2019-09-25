/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdateProductInput = {
  readonly id: string;
  readonly quantityInStock?: number | null;
};
export type UpdateProductMutationVariables = {
  readonly input: UpdateProductInput;
};
export type UpdateProductMutationResponse = {
  readonly updateProduct: {
    readonly id: string;
    readonly quantityInStock: number | null;
  } | null;
};
export type UpdateProductMutation = {
  readonly response: UpdateProductMutationResponse;
  readonly variables: UpdateProductMutationVariables;
};

/*
mutation UpdateProductMutation(
  $input: UpdateProductInput!
) {
  updateProduct(input: $input) {
    id
    quantityInStock
  }
}
*/

const node: ConcreteRequest = (function() {
  var v0 = [
      {
        kind: "LocalArgument",
        name: "input",
        type: "UpdateProductInput!",
        defaultValue: null
      }
    ],
    v1 = [
      {
        kind: "LinkedField",
        alias: null,
        name: "updateProduct",
        storageKey: null,
        args: [
          {
            kind: "Variable",
            name: "input",
            variableName: "input"
          }
        ],
        concreteType: "Product",
        plural: false,
        selections: [
          {
            kind: "ScalarField",
            alias: null,
            name: "id",
            args: null,
            storageKey: null
          },
          {
            kind: "ScalarField",
            alias: null,
            name: "quantityInStock",
            args: null,
            storageKey: null
          }
        ]
      }
    ];
  return {
    kind: "Request",
    fragment: {
      kind: "Fragment",
      name: "UpdateProductMutation",
      type: "Mutation",
      metadata: null,
      argumentDefinitions: v0 /*: any*/,
      selections: v1 /*: any*/
    },
    operation: {
      kind: "Operation",
      name: "UpdateProductMutation",
      argumentDefinitions: v0 /*: any*/,
      selections: v1 /*: any*/
    },
    params: {
      operationKind: "mutation",
      name: "UpdateProductMutation",
      id: null,
      text:
        "mutation UpdateProductMutation(\n  $input: UpdateProductInput!\n) {\n  updateProduct(input: $input) {\n    id\n    quantityInStock\n  }\n}\n",
      metadata: {}
    }
  };
})();
(node as any).hash = "4e8f09ff2614e5a95071d1ff48167992";
export default node;

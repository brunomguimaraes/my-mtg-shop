/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type DeleteCartProductInput = {
  readonly id: string;
};
export type DeleteCartProductMutationVariables = {
  readonly input: DeleteCartProductInput;
};
export type DeleteCartProductMutationResponse = {
  readonly deleteCartProduct: boolean;
};
export type DeleteCartProductMutation = {
  readonly response: DeleteCartProductMutationResponse;
  readonly variables: DeleteCartProductMutationVariables;
};

/*
mutation DeleteCartProductMutation(
  $input: DeleteCartProductInput!
) {
  deleteCartProduct(input: $input)
}
*/

const node: ConcreteRequest = (function() {
  var v0 = [
      {
        kind: "LocalArgument",
        name: "input",
        type: "DeleteCartProductInput!",
        defaultValue: null
      }
    ],
    v1 = [
      {
        kind: "ScalarField",
        alias: null,
        name: "deleteCartProduct",
        args: [
          {
            kind: "Variable",
            name: "input",
            variableName: "input"
          }
        ],
        storageKey: null
      }
    ];
  return {
    kind: "Request",
    fragment: {
      kind: "Fragment",
      name: "DeleteCartProductMutation",
      type: "Mutation",
      metadata: null,
      argumentDefinitions: v0 /*: any*/,
      selections: v1 /*: any*/
    },
    operation: {
      kind: "Operation",
      name: "DeleteCartProductMutation",
      argumentDefinitions: v0 /*: any*/,
      selections: v1 /*: any*/
    },
    params: {
      operationKind: "mutation",
      name: "DeleteCartProductMutation",
      id: null,
      text:
        "mutation DeleteCartProductMutation(\n  $input: DeleteCartProductInput!\n) {\n  deleteCartProduct(input: $input)\n}\n",
      metadata: {}
    }
  };
})();
(node as any).hash = "e1696db53eb763225b014cfe7a86c2c6";
export default node;

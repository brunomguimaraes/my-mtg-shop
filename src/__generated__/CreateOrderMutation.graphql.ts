/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type CreateOrderInput = {
  readonly totalOrderValue?: number | null;
  readonly isPaid?: boolean | null;
  readonly orderedProductIds?: ReadonlyArray<string | null> | null;
  readonly cartProductsIds?: ReadonlyArray<string | null> | null;
};
export type CreateOrderMutationVariables = {
  readonly input: CreateOrderInput;
};
export type CreateOrderMutationResponse = {
  readonly createOrder: {
    readonly id: string;
    readonly totalOrderValue: number | null;
    readonly isPaid: boolean | null;
  } | null;
};
export type CreateOrderMutation = {
  readonly response: CreateOrderMutationResponse;
  readonly variables: CreateOrderMutationVariables;
};

/*
mutation CreateOrderMutation(
  $input: CreateOrderInput!
) {
  createOrder(input: $input) {
    id
    totalOrderValue
    isPaid
  }
}
*/

const node: ConcreteRequest = (function() {
  var v0 = [
      {
        kind: "LocalArgument",
        name: "input",
        type: "CreateOrderInput!",
        defaultValue: null
      }
    ],
    v1 = [
      {
        kind: "LinkedField",
        alias: null,
        name: "createOrder",
        storageKey: null,
        args: [
          {
            kind: "Variable",
            name: "input",
            variableName: "input"
          }
        ],
        concreteType: "Order",
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
            name: "totalOrderValue",
            args: null,
            storageKey: null
          },
          {
            kind: "ScalarField",
            alias: null,
            name: "isPaid",
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
      name: "CreateOrderMutation",
      type: "Mutation",
      metadata: null,
      argumentDefinitions: v0 /*: any*/,
      selections: v1 /*: any*/
    },
    operation: {
      kind: "Operation",
      name: "CreateOrderMutation",
      argumentDefinitions: v0 /*: any*/,
      selections: v1 /*: any*/
    },
    params: {
      operationKind: "mutation",
      name: "CreateOrderMutation",
      id: null,
      text:
        "mutation CreateOrderMutation(\n  $input: CreateOrderInput!\n) {\n  createOrder(input: $input) {\n    id\n    totalOrderValue\n    isPaid\n  }\n}\n",
      metadata: {}
    }
  };
})();
(node as any).hash = "68e1636aa12b12e67854f34301f0dfba";
export default node;

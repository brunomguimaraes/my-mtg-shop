/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _CreditCardList_creditCardInfo$ref: unique symbol;
export type CreditCardList_creditCardInfo$ref = typeof _CreditCardList_creditCardInfo$ref;
export type CreditCardList_creditCardInfo = {
  readonly creditCardInfo: ReadonlyArray<{
    readonly cardNumber: number;
    readonly cvv: number;
    readonly id: string;
    readonly isValid: boolean;
  }>;
  readonly " $refType": CreditCardList_creditCardInfo$ref;
};

const node: ReaderFragment = {
  kind: "Fragment",
  name: "CreditCardList_creditCardInfo",
  type: "User",
  metadata: null,
  argumentDefinitions: [],
  selections: [
    {
      kind: "LinkedField",
      alias: null,
      name: "creditCardInfo",
      storageKey: null,
      args: null,
      concreteType: "PaymentInfo",
      plural: true,
      selections: [
        {
          kind: "ScalarField",
          alias: null,
          name: "cardNumber",
          args: null,
          storageKey: null
        },
        {
          kind: "ScalarField",
          alias: null,
          name: "cvv",
          args: null,
          storageKey: null
        },
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
          name: "isValid",
          args: null,
          storageKey: null
        }
      ]
    }
  ]
};
(node as any).hash = "d316f08ce55c5b8aeb0d162dfe800840";
export default node;

/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type CreditCardList_creditCardInfo$ref = any;
export type CreditCardList_creditCardInfo = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly cardNumber: number;
            readonly cvv: number;
            readonly id: string;
            readonly isValid: boolean;
        };
    } | null> | null;
    readonly " $refType": CreditCardList_creditCardInfo$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CreditCardList_creditCardInfo",
  "type": "PaymentInfoConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "PaymentInfoEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "PaymentInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cardNumber",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cvv",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "id",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "isValid",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
(node as any).hash = 'e4d3d97b3ccd59f7335944d597bb9dfb';
export default node;

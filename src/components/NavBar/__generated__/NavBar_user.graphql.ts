/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
type CartProductsList_shoppingCart$ref = any;
export type NavBar_user$ref = any;
export type NavBar_user = {
  readonly name: string;
  readonly id: string;
  readonly shoppingCart: {
    readonly cartProducts: ReadonlyArray<{
      readonly quantityOnCart: number | null;
    } | null> | null;
    readonly " $fragmentRefs": CartProductsList_shoppingCart$ref;
  } | null;
  readonly " $refType": NavBar_user$ref;
};

const node: ReaderFragment = {
  kind: "Fragment",
  name: "NavBar_user",
  type: "User",
  metadata: null,
  argumentDefinitions: [],
  selections: [
    {
      kind: "ScalarField",
      alias: null,
      name: "name",
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
            {
              kind: "ScalarField",
              alias: null,
              name: "quantityOnCart",
              args: null,
              storageKey: null
            }
          ]
        },
        {
          kind: "FragmentSpread",
          name: "CartProductsList_shoppingCart",
          args: null
        }
      ]
    }
  ]
};
(node as any).hash = "8b6833ac1f9c803d3ab8360cd541fd3f";
export default node;

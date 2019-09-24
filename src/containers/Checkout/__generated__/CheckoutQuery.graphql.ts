/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type CheckoutCard_user$ref = any;
type NavBar_user$ref = any;
export type CheckoutQueryVariables = {};
export type CheckoutQueryResponse = {
  readonly user: {
    readonly " $fragmentRefs": NavBar_user$ref & CheckoutCard_user$ref;
  } | null;
};
export type CheckoutQuery = {
  readonly response: CheckoutQueryResponse;
  readonly variables: CheckoutQueryVariables;
};

/*
query CheckoutQuery {
  user(id: "e21b4d40-df18-11e9-8371-4d6e71ada4c9") {
    ...NavBar_user
    ...CheckoutCard_user
    id
  }
}

fragment NavBar_user on User {
  name
  id
  shoppingCart {
    cartProducts {
      quantityOnCart
      id
    }
    ...CartProductsList_shoppingCart
    id
  }
}

fragment CheckoutCard_user on User {
  name
  id
  shoppingCart {
    ...CheckoutList_shoppingCart
    cartProducts {
      id
      quantityOnCart
      product {
        id
        name
        price
        quantityInStock
      }
    }
    id
  }
  ...CreditCardList_creditCardInfo
  creditCardInfo {
    cardNumber
    cvv
    id
    isValid
  }
}

fragment CheckoutList_shoppingCart on ShoppingCart {
  id
  cartProducts {
    id
    quantityOnCart
    product {
      id
      name
      price
      quantityInStock
    }
  }
}

fragment CreditCardList_creditCardInfo on User {
  creditCardInfo {
    cardNumber
    cvv
    id
    isValid
  }
}

fragment CartProductsList_shoppingCart on ShoppingCart {
  id
  cartProducts {
    id
    quantityOnCart
    product {
      id
      name
      price
      quantityInStock
    }
  }
}
*/

const node: ConcreteRequest = (function() {
  var v0 = [
      {
        kind: "Literal",
        name: "id",
        value: "e21b4d40-df18-11e9-8371-4d6e71ada4c9"
      }
    ],
    v1 = {
      kind: "ScalarField",
      alias: null,
      name: "name",
      args: null,
      storageKey: null
    },
    v2 = {
      kind: "ScalarField",
      alias: null,
      name: "id",
      args: null,
      storageKey: null
    };
  return {
    kind: "Request",
    fragment: {
      kind: "Fragment",
      name: "CheckoutQuery",
      type: "Query",
      metadata: null,
      argumentDefinitions: [],
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "user",
          storageKey: 'user(id:"e21b4d40-df18-11e9-8371-4d6e71ada4c9")',
          args: v0 /*: any*/,
          concreteType: "User",
          plural: false,
          selections: [
            {
              kind: "FragmentSpread",
              name: "NavBar_user",
              args: null
            },
            {
              kind: "FragmentSpread",
              name: "CheckoutCard_user",
              args: null
            }
          ]
        }
      ]
    },
    operation: {
      kind: "Operation",
      name: "CheckoutQuery",
      argumentDefinitions: [],
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "user",
          storageKey: 'user(id:"e21b4d40-df18-11e9-8371-4d6e71ada4c9")',
          args: v0 /*: any*/,
          concreteType: "User",
          plural: false,
          selections: [
            v1 /*: any*/,
            v2 /*: any*/,
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
                    },
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
                        v2 /*: any*/,
                        v1 /*: any*/,
                        {
                          kind: "ScalarField",
                          alias: null,
                          name: "price",
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
                  ]
                },
                v2 /*: any*/
              ]
            },
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
                v2 /*: any*/,
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
        }
      ]
    },
    params: {
      operationKind: "query",
      name: "CheckoutQuery",
      id: null,
      text:
        'query CheckoutQuery {\n  user(id: "e21b4d40-df18-11e9-8371-4d6e71ada4c9") {\n    ...NavBar_user\n    ...CheckoutCard_user\n    id\n  }\n}\n\nfragment NavBar_user on User {\n  name\n  id\n  shoppingCart {\n    cartProducts {\n      quantityOnCart\n      id\n    }\n    ...CartProductsList_shoppingCart\n    id\n  }\n}\n\nfragment CheckoutCard_user on User {\n  name\n  id\n  shoppingCart {\n    ...CheckoutList_shoppingCart\n    cartProducts {\n      id\n      quantityOnCart\n      product {\n        id\n        name\n        price\n        quantityInStock\n      }\n    }\n    id\n  }\n  ...CreditCardList_creditCardInfo\n  creditCardInfo {\n    cardNumber\n    cvv\n    id\n    isValid\n  }\n}\n\nfragment CheckoutList_shoppingCart on ShoppingCart {\n  id\n  cartProducts {\n    id\n    quantityOnCart\n    product {\n      id\n      name\n      price\n      quantityInStock\n    }\n  }\n}\n\nfragment CreditCardList_creditCardInfo on User {\n  creditCardInfo {\n    cardNumber\n    cvv\n    id\n    isValid\n  }\n}\n\nfragment CartProductsList_shoppingCart on ShoppingCart {\n  id\n  cartProducts {\n    id\n    quantityOnCart\n    product {\n      id\n      name\n      price\n      quantityInStock\n    }\n  }\n}\n',
      metadata: {}
    }
  };
})();
(node as any).hash = "795c8a448d2e334560ff68ee3efb22b8";
export default node;

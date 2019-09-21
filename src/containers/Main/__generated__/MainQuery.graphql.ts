/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
type NavBar_user$ref = any;
type ProductsList_products$ref = any;
type ProductsList_shoppingCart$ref = any;
export type MainQueryVariables = {};
export type MainQueryResponse = {
  readonly user: {
    readonly shoppingCart: {
      readonly " $fragmentRefs": ProductsList_shoppingCart$ref;
    } | null;
    readonly " $fragmentRefs": NavBar_user$ref;
  } | null;
  readonly " $fragmentRefs": ProductsList_products$ref;
};
export type MainQuery = {
  readonly response: MainQueryResponse;
  readonly variables: MainQueryVariables;
};

/*
query MainQuery {
  ...ProductsList_products
  user(id: "35c96560-dca0-11e9-b5e6-6329846dbf80") {
    ...NavBar_user
    shoppingCart {
      ...ProductsList_shoppingCart
      id
    }
    id
  }
}

fragment ProductsList_products on Query {
  products {
    ...DetailedProductCard_product
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

fragment ProductsList_shoppingCart on ShoppingCart {
  id
  cartProducts {
    id
    quantityOnCart
    product {
      id
    }
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

fragment DetailedProductCard_product on Product {
  id
  imgUrl
  name
  price
  quantityInStock
  cardColor
  description
  cardType
}
*/

const node: ConcreteRequest = (function() {
  var v0 = [
      {
        kind: "Literal",
        name: "id",
        value: "35c96560-dca0-11e9-b5e6-6329846dbf80"
      }
    ],
    v1 = {
      kind: "ScalarField",
      alias: null,
      name: "id",
      args: null,
      storageKey: null
    },
    v2 = {
      kind: "ScalarField",
      alias: null,
      name: "name",
      args: null,
      storageKey: null
    },
    v3 = {
      kind: "ScalarField",
      alias: null,
      name: "price",
      args: null,
      storageKey: null
    },
    v4 = {
      kind: "ScalarField",
      alias: null,
      name: "quantityInStock",
      args: null,
      storageKey: null
    };
  return {
    kind: "Request",
    fragment: {
      kind: "Fragment",
      name: "MainQuery",
      type: "Query",
      metadata: null,
      argumentDefinitions: [],
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "user",
          storageKey: 'user(id:"35c96560-dca0-11e9-b5e6-6329846dbf80")',
          args: v0 /*: any*/,
          concreteType: "User",
          plural: false,
          selections: [
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
                  kind: "FragmentSpread",
                  name: "ProductsList_shoppingCart",
                  args: null
                }
              ]
            },
            {
              kind: "FragmentSpread",
              name: "NavBar_user",
              args: null
            }
          ]
        },
        {
          kind: "FragmentSpread",
          name: "ProductsList_products",
          args: null
        }
      ]
    },
    operation: {
      kind: "Operation",
      name: "MainQuery",
      argumentDefinitions: [],
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "products",
          storageKey: null,
          args: null,
          concreteType: "Product",
          plural: true,
          selections: [
            v1 /*: any*/,
            {
              kind: "ScalarField",
              alias: null,
              name: "imgUrl",
              args: null,
              storageKey: null
            },
            v2 /*: any*/,
            v3 /*: any*/,
            v4 /*: any*/,
            {
              kind: "ScalarField",
              alias: null,
              name: "cardColor",
              args: null,
              storageKey: null
            },
            {
              kind: "ScalarField",
              alias: null,
              name: "description",
              args: null,
              storageKey: null
            },
            {
              kind: "ScalarField",
              alias: null,
              name: "cardType",
              args: null,
              storageKey: null
            }
          ]
        },
        {
          kind: "LinkedField",
          alias: null,
          name: "user",
          storageKey: 'user(id:"35c96560-dca0-11e9-b5e6-6329846dbf80")',
          args: v0 /*: any*/,
          concreteType: "User",
          plural: false,
          selections: [
            v2 /*: any*/,
            v1 /*: any*/,
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
                    v1 /*: any*/,
                    {
                      kind: "LinkedField",
                      alias: null,
                      name: "product",
                      storageKey: null,
                      args: null,
                      concreteType: "Product",
                      plural: false,
                      selections: [
                        v1 /*: any*/,
                        v2 /*: any*/,
                        v3 /*: any*/,
                        v4 /*: any*/
                      ]
                    }
                  ]
                },
                v1 /*: any*/
              ]
            }
          ]
        }
      ]
    },
    params: {
      operationKind: "query",
      name: "MainQuery",
      id: null,
      text:
        'query MainQuery {\n  ...ProductsList_products\n  user(id: "35c96560-dca0-11e9-b5e6-6329846dbf80") {\n    ...NavBar_user\n    shoppingCart {\n      ...ProductsList_shoppingCart\n      id\n    }\n    id\n  }\n}\n\nfragment ProductsList_products on Query {\n  products {\n    ...DetailedProductCard_product\n    id\n  }\n}\n\nfragment NavBar_user on User {\n  name\n  id\n  shoppingCart {\n    cartProducts {\n      quantityOnCart\n      id\n    }\n    ...CartProductsList_shoppingCart\n    id\n  }\n}\n\nfragment ProductsList_shoppingCart on ShoppingCart {\n  id\n  cartProducts {\n    id\n    quantityOnCart\n    product {\n      id\n    }\n  }\n}\n\nfragment CartProductsList_shoppingCart on ShoppingCart {\n  id\n  cartProducts {\n    id\n    quantityOnCart\n    product {\n      id\n      name\n      price\n      quantityInStock\n    }\n  }\n}\n\nfragment DetailedProductCard_product on Product {\n  id\n  imgUrl\n  name\n  price\n  quantityInStock\n  cardColor\n  description\n  cardType\n}\n',
      metadata: {}
    }
  };
})();
(node as any).hash = "b95ce9e463296f55506dc78197862c90";
export default node;

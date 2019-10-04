import { commitMutation, GraphQLTaggedNode } from "react-relay";
import environment from "./Environment";

interface ICommitMutation {
  mutation: GraphQLTaggedNode;
  variables: { [name: string]: any };
}

export const mutationResolve = ({ mutation, variables }: ICommitMutation) => {
  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: (response, errors) => {
        if (errors) {
          return reject(errors);
        }

        return resolve(response);
      },
      onError: err => {
        return reject(err);
      }
    });
  });
};

import { Environment, Network, RecordSource, Store } from "relay-runtime";

function fetchQuery(operation: any, variables: any) {
    return fetch("https://api.graph.cool/relay/v1/cjzogtfs9497g01948v8slrdj", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: operation.text,
            variables
        })
    }).then((response) => {
        return response.json();
    });
}

const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource())
});

export default environment;

import React from "react";
import "./App.css";
import environment from "../../Environment";
import { QueryRenderer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import NavBar from "../../components/NavBar";
import { AppQuery } from "./__generated__/AppQuery.graphql";

const App: React.FC = () => {
    return (
        <React.Fragment>
            <NavBar />
            <QueryRenderer<AppQuery>
                environment={environment}
                query={graphql`
                    query AppQuery {
                        viewer {
                            allProducts {
                                count
                                edges {
                                    node {
                                        name
                                        price
                                        id
                                    }
                                }
                            }
                        }
                    }
                `}
                variables={{}}
                render={({ error, props }): React.ReactNode => {
                    if (error) {
                        return <div>Error!</div>;
                    }
                    if (!props) {
                        return <div>Loading...</div>;
                    }
                    console.log("response:", props);
                    return (
                        <div>
                            Done!
                            <div>
                                {props.viewer.allProducts.edges!.map(
                                    (e: any) => (
                                        <p>{e.node.name}</p>
                                    )
                                )}
                            </div>
                        </div>
                    );
                }}
            />
        </React.Fragment>
    );
};

export default App;

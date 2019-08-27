import React from "react";
import "./App.css";
import environment from "../../Environment";
import { QueryRenderer } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import NavBar from "../../components/NavBar";

const App: React.FC = () => {
    return (
        <React.Fragment>
            <NavBar />
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query AppQuery {
                        viewer {
                            Products(id: "cjznaembq0urt0191e1guw1ys") {
                                name
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
                    return <div>Done!</div>;
                }}
            />
        </React.Fragment>
    );
};

export default App;

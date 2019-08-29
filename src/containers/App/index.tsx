import React from "react";
import "./style.css";
import NavBar from "../../components/NavBar";
import Products from "../Products";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, Container } from "@material-ui/core";

const myMtgShopTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#252627"
        },
        secondary: {
            main: "#4B88A2",
            light: "#A3D5FF"
        },
        error: {
            main: "#BB0A21"
        }
    }
});

const App: React.FC = () => {
    return (
        <React.Fragment>
            <ThemeProvider theme={myMtgShopTheme}>
                <NavBar />
                <Container maxWidth="sm">
                    <Products />
                </Container>
            </ThemeProvider>
        </React.Fragment>
    );
};

export default App;

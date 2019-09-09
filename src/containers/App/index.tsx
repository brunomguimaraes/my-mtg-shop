import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Main from "../Main";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import Checkout from "../Checkout";

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

const AppComp = () => {
  return (
    <ThemeProvider theme={myMtgShopTheme}>
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="/checkout" component={Checkout} />

        <Route exact path="/" render={() => <Redirect to="/main" />} />
        <Route path="/*" component={Main} />
      </Switch>
    </ThemeProvider>
  );
};

const App = withRouter(AppComp);
export default App;

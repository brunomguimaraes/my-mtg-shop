import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./containers/App";
import { Router } from "react-router-dom";

import { createBrowserHistory } from "history";
require("dotenv").config();

const browserHistory = createBrowserHistory();

ReactDOM.render(
	<Router history={browserHistory}>
		<App />
	</Router>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

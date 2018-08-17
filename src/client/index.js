import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { Routes } from "./components/Routes";
import init, { ConnectedRouter } from "@arkas/core";

const store = init({
  appConfig: {
    baseServiceUrl: window.location.protocol + "//" + window.location.host
  }
});

const Root = ({ routes }) => (
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter children={routes} />
    </Provider>
  </AppContainer>
);
ReactDOM.render(<Root routes={Routes} />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept("./components/Routes", () => {
    const routes = require("./components/Routes").Routes;
    ReactDOM.render(<Root routes={routes} />, document.getElementById("root"));
  });
}

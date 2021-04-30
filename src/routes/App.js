import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../containers/Home.jsx";
import Login from "../containers/Login.jsx";
import Layout from "../components/Layout.jsx";
import NotFound from "../containers/NotFound.jsx";

import "../assets/styles/App.scss";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;

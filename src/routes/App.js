import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../containers/Home.jsx";
import Login from "../containers/Login.jsx";
import Layout from "../components/Layout.jsx";

import "../assets/styles/App.scss";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/promos" component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;

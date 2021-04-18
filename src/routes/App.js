import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../containers/Home.jsx";
import Login from "../containers/Login.jsx";
import "../assets/styles/App.scss";

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
  </BrowserRouter>
);

export default App;
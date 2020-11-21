import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import RegistrationPage from "./containers/RegisterPage/RegisterPage";
import AuthorizationPage from "./containers/AuthorizationPage/AuthorizationPage";
import AddProductPage from "./containers/AddProductPage/AddProductPage";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Redirect from="/" exact to="/posts" />
        <Route path="/register" exact component={RegistrationPage} />
        <Route path="/login" exact component={AuthorizationPage} />
        <Route path="/add_product" exact component={AddProductPage} />
      </Switch>
    </Layout>
  );
};

export default App;

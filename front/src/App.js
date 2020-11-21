import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import RegistrationPage from "./containers/RegisterPage/RegisterPage";
import AuthorizationPage from "./containers/AuthorizationPage/AuthorizationPage";
import AddProductPage from "./containers/AddProductPage/AddProductPage";
import ProductsPage from "./containers/ProductsPage/ProductsPage";
import ProductPage from "./containers/ProductPage/ProductPage";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/register" exact component={RegistrationPage} />
        <Route path="/login" exact component={AuthorizationPage} />
        <Route path="/add_product" exact component={AddProductPage} />
        <Route path="/category/:id" exact component={ProductsPage} />
        <Route path="/product/:id" exact component={ProductPage} />
        <Redirect to="/category/all" />
      </Switch>
    </Layout>
  );
};

export default App;

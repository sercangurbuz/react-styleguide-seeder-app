import React from "react";
import Customers from "./Customers";
import Customer from "./Customers/Customer";
import Orders from "./Orders";
import Home from "./Home";
import Layout from "./Layout";
import { Route } from "react-router-dom";
import { ErrorBoundary } from "@arkas/core";

export const Routes = (
  <ErrorBoundary>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/customers/:id" component={Customer} />
      <Route exact path="/customers" component={Customers} />
      <Route exact path="/orders" component={Orders} />
    </Layout>
  </ErrorBoundary>
);

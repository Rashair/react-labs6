import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PageEmployeesList from "./PageEmployeesList";
import PageEmployee from "./PageEmployee";

const App = () => (
  <div className="mx-auto" align="center" style={{ width: "800px" }}>
    <h1 className="absolute-center">Minimal React</h1>
    <BrowserRouter>
      <Route exact path="/">
        <PageEmployeesList />
      </Route>
      <Route path="/new">
        <PageEmployee />
      </Route>
    </BrowserRouter>
  </div>
);

export default App;

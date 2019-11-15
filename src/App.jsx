import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Employees from "./Employees";
import AddEmployee from "./AddEmployee";

const App = () => (
  <div className="mx-auto" align="center" style={{ width: "800px" }}>
    <h1 className="absolute-center">Minimal React</h1>
    <BrowserRouter>
      <Route exact path="/">
        <Employees />
      </Route>
      <Route path="/AddEmployee">
        <AddEmployee />
      </Route>
    </BrowserRouter>
  </div>
);

export default App;

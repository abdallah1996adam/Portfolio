import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import { Home } from "./pages/Home";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact component={Home} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

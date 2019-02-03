import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notes from "./pages/Notes";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import "./style.css"

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Notes} />
          <Route exact path="/notes" component={Notes} /> 
          <Route exact path="notes/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
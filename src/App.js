import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Notes from "./pages/Notes";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import "./style.css"

// 3000/notes/:id 404 error
// 3000/api/notes 404 error
// 3001/api/notes, notes/:id are functional

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
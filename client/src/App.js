import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Nav";
import Notes from "./pages/Notes";
import All from "./pages/All";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import StaticList from "./pages/StaticList";
import "./style.css"

function App() {
  return (
    <Router>
      <>
      <Navigation />
        <Switch>
          <Route exact path="/" component={Notes} />
          <Route exact path="/notes" component={All} />
          <Route exact path="/notes/:id" component={Detail} />
          <Route exact path="/api/notes" component={StaticList} />}
          <Route component={NoMatch} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
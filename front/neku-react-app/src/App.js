import "./App.css";

import Profile from "./pages/Profile";
import TeamsPlayers from "./pages/TeamsPlayers";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/profile" component={Profile} />
          <Route path="/Teams" component={TeamsPlayers} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

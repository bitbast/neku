import "./App.css";

import Profile from "./pages/Profile";
import TeamsPlayers from "./pages/TeamsPlayers";
import Gamers from "./pages/Gamers"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// COMPONENTS //
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}>
          </Route>
          <Route path="/profile" component={Profile} />
          <Route path="/Teams" component={TeamsPlayers} />
          <Route path="/Gamers" component={Gamers} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import "./App.css";

import Profile from "./pages/Profile";
import Teams from "./pages/Teams";
import Gamers from "./pages/Gamers";
import Videogames from "./pages/Videogames";
import TeamPlayers from "./pages/TeamPlayers";

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
          <Route path="/Teams" component={Teams} />
          <Route path="/Gamers" component={Gamers} />
          <Route path="/Videogames" component={Videogames} />
          <Route path="/TeamPlayers" component={TeamPlayers} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import "./App.css";

// import Profile from "./pages/Profile";
// import Teams from "./pages/Teams";
// import Gamers from "./pages/Gamers";
// import Videogames from "./pages/Videogames";
// import TeamPlayers from "./pages/TeamPlayers";
import Registration from './pages/Register';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// COMPONENTS //
// import NavBar from './components/NavBar'
// import Footer from './components/Footer'
// import Home from "./pages/Home";
// import SignupGamer from './components/SignupGamer'
// import SignupTeam from './components/SignupTeam'


function App() {
  return (
    // <div>
    //   <SignupGamer />
    //   <SignupTeam />
    // </div>
    <Router>
      <div>
        {/* <NavBar /> */}
        <Registration />
        <Switch>
          {/* <Route exact path="/" component={Home}>
          </Route>
          <Route path="/profile" component={Profile} />
          <Route path="/Teams" component={Teams} />
          <Route path="/Gamers" component={Gamers} />
          <Route path="/Videogames" component={Videogames} />
          <Route path="/TeamPlayers" component={TeamPlayers} /> */}
          <Route path="/Register" component={Registration} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

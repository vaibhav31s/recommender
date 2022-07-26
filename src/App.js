import NavBar from "./NavBar/Navbar";
import Login from "./Login/Login";
import Dashboard from "./dashboard/Dashboard";
import Home from './home/Home';
import { BrowserRouter as Router, Switch, Route, useHistory} from "react-router-dom";
import Register from "./Register/Register";
import SearchResult from "./search/SearchResult";
import Search from "./search/Search";

import Carousal from "./carousal/Carousal";
import Cards from "./card/Cards";

function App() {
  console.log(window.location.pathname)
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
            <Search/>
          <div className="content">
            <Switch>
              <Route exact path="/">
              <div class="row">
              <div class="col-sm">
                <Cards></Cards>
              </div>
              <div class="col-sm">
              <Cards></Cards>
              </div>
              <div class="col-sm">
                           <Cards></Cards>

              </div>
              <div class="col-sm">
                           <Cards></Cards>

              </div>
            </div>
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/search">
                <SearchResult />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/recommendations">

              </Route>
              <Route path="*"></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

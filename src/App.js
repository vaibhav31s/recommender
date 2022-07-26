import NavBar from "./NavBar/Navbar";
import Login from "./Login/Login";
import Dashboard from "./dashboard/Dashboard";
import Home from './home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Register/register";
import SearchResult from "./search/SearchResult";
import Search from "./search/Search";
import Carousal from "./carousal/Carousal";
import Cards from "./card/Cards";
import Recommendations from "./recommendations/Recommendations";
function App() {
  return (
    <div>
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
              <Recommendations/>
              </Route>
              <Route path="*"></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

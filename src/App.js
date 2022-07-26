import NavBar from "./NavBar/Navbar";
import Login from "./Login/Login";
import Dashboard from "./dashboard/Dashboard";
import Home from './home/Home';
import { BrowserRouter as Router, Switch, Route, useHistory} from "react-router-dom";
import Register from "./Register/Register";
import SearchResult from "./search/SearchResult";
import Search from "./search/Search";
import { useState } from "react";
const App =()=> {
  const history = useHistory();
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
            <Search/>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home/>
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
              <Route path="*"></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

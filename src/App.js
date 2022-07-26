import "./App.css";
import NavBar from "./NavBar/Navbar";
import Login from "./Login/Login";
import Dashboard from "./dashboard/Dashboard";
import Home from './home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Register/register";
import SearchResult from "./search/SearchResult";
import Search from "./search/Search";
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
    </div>
  );
}

export default App;


import './App.css';
import NavBar from './NavBar/navbar';
import Login from './Login/Login';
import  Dashboard from './dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Register from './Register/register'
function App() {
  return (
    <div>
      <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <div> hello</div>
              </Route>
              <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;

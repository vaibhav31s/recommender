import NavBar from "./NavBar/navbar";
import Login from "./Login/login";
import Dashboard from "./dashboard/Dashboard";
import Home from './home/Home';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register/register";

import SearchResult from "./search/SearchResult";
import Search from "./search/Search";

import Carousal from "./carousal/Carousal";
import Cards from "./card/Cards";
import Recommendations from "./recommendations/Recommendations";
import Footer from "./footer/Footer";
function App() {
  console.log(window.location.pathname)
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/search" element={<SearchResult />} />
              <Route path="/register" element={<Register />} />
              <Route path="/recommendations" element={<Recommendations/>} />
              <Route path="/product/1" element={<Recommendations/>} />
              <Route path="*" element={null} />
            </Routes>
          </div>
        </div>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;

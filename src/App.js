import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
//import Home from "./components/pages/Home";
import Home from "./components/pages/Home";
//import Discover from "./components/pages/Discover";
//import Search from "./components/pages/Search";


const App = () =>
  <div>
  <Router>
    <div>
      <Navpills />
     
      <Route exact path="/" component={Home} />
      
    </div>
  </Router>
  
  </div>

export default App;

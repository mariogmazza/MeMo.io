import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Userlog from "./components/pages/Userlog";
import NoMatch from "./components/NoMatch";


const App = () =>
  <div>
  <Router>
    <div>
     <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} /> 
      <Route exact path="/register" component={Signup} />
      <Route exact path="/logout" component={Login} />
      <Route exact path="/user/:id" component={Userlog} />
      <Route component={NoMatch} />
    </Switch>
   </div>
  </Router>
  
  </div>

export default App;
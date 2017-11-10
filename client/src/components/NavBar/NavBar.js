import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = (props) =>

<nav className="navbar navbar-inverse ">
<div className="container-fluid">
<div className="navbar-header">
  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>                        
  </button>
  <a className="navbar-brand" href="/">Simon Says</a>
</div>
<div className="collapse navbar-collapse" id="myNavbar">
  <ul className="nav navbar-nav">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Simon Game</Link>
    </li>
  </ul>

{props.userInfo ?
  <ul className="nav navbar-nav navbar-right">
    <li><div className="navbar-text">Hello {props.userInfo}</div></li>
    <li><a className="btn btn-primary" href="/logout">Logout</a></li>
  </ul>
  :
  <ul className="nav navbar-nav navbar-right">
    <li><a className="btn btn-primary" href="/login"><span className="glyphicon glyphicon-log-in"></span>Login</a></li>
    <li><a className="btn btn-primary" href="/register">Register</a></li>
  </ul>

}
    </div>
  </div>
</nav>



export default NavBar

import React, { Component } from 'react';
import {Link,NavLink} from "react-router-dom";
const Navbar = (props) => {
    return <>
   <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link" aria-current="page" to="/users">Users</Link>
       {
         !props.user?(
           <>
            <Link className="nav-link" to="/register">Register</Link>
        <Link className="nav-link" to="/login">Login</Link>
           </>
         ) : (
           <>
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
        <Link className="nav-link" to="/logout">Logout</Link>
           </>
         )
}
        
      </div>
    </div>
  </div>
</nav>
    </>;
}
 
export default Navbar;
import React from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = () => (
  <nav>
  <h1 className="text-center">#StudentHub
  <span className="float-right">
    <button className="btn btn-danger">Login</button>
  </span></h1>
  </nav>
);

export default Navbar;

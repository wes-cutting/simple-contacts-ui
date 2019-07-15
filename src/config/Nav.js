import React from "react";
import { Link } from "react-router-dom";
import '../styles/Nav.css'

const Nav = ({ login }) => {
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/auth">Register</Link>
        <Link to="/login">Login</Link>
    </nav>
  );
};

export default Nav;

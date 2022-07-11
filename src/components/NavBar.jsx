import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <div className="logo"> &lt;Rafael Leal</div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

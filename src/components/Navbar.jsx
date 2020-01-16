import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ onSignOut }) => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">Todos</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className={"nav-item" + (pathname === "/" ? " active" : "")}>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <span className="nav-link" onClick={() => onSignOut()}>
              Logout
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

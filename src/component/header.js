import React  from "react";
import {NavLink,Link} from 'react-router-dom';
const header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <NavLink className="navbar-brand mr-30" to="/">
          Branding
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  justify-content-end">
            <li className="nav-item active">
              <NavLink className="nav-NavLink" to="/">
                Home 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-NavLink" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-NavLink" to="/service">
                services
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-NavLink" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-NavLink" to="/register">
                Register
              </Link>
            </li>
           
          </ul>
          
        </div>
      </nav>
    </div>
  );
};

export default header;

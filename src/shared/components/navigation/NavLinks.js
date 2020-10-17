import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";

import "./NavLinks.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      {auth.isLoggedin && (
        <li>
          <NavLink to="/u1/places">MY PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedin && (
        <li>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      )}
      {auth.isLoggedin && (
        <li>
          <NavLink to="/u1/journal">MY JOURNAL ENTRYS</NavLink>
        </li>
      )}
      {auth.isLoggedin && (
        <li>
          <NavLink to="/journal/new">ADD JOURNAL ENTRY</NavLink>
        </li>
      )}
      {auth.isLoggedin && (
        <li>
          <NavLink to="/ra/blog">MY BLOG</NavLink>
        </li>
      )}
      {auth.isLoggedin && (
        <li>
          <NavLink to="/blog/new">ADD BLOG POST</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/auth">AUTHENTICATE</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

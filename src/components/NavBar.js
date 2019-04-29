import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
    <NavLink to="/" exact style={link}>
    <NavLink to="/Movies" exact style={link}>
    <NavLink to="/Directors" exact style={link}>
    <NavLink to="/Actors" exact style={link}>
    </div>;
  );
};

export default NavBar;

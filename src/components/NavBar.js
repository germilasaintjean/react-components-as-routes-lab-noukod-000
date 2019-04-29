import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
    <NavLink to="/" exact style={link}>Home</NavLink>
    <NavLink to="/Movies" exact style={link}>Movies</NavLink>
    <NavLink to="/Directors" exact style={link}>Directors</NavLink>
    <NavLink to="/Actors" exact style={link}>Actors</NavLink>
    </div>;
  );
};

export default NavBar;

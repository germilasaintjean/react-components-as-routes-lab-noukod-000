import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
        {
          const Navbar = () =>
          <div>
          <NavLink to="/" exact style={link}>Home</NavLink>
          <NavLink to="/Movies" exact style={link}>Movies</NavLink>
          <NavLink to="/Directors" exact style={link}>Directors</NavLink>
          <NavLink to="/Actors" exact style={link}>Actors/NavLink>
        }
        </div>
  </Navbar>
  </Router>
  );
};

export default App

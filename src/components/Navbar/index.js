import React from 'react';
import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => (
  <div className="navbar">
    <Link to="/" className="logo-link">
      <img src={logo} alt="logo" className="logo" />
    </Link>

    <nav className="nav-items">
      <NavLink to="/your-gif-stash" className="nav-link">
        <i className="fas fa-heart"></i>
        <span className="link-text">Your GIFs</span>
      </NavLink>
    </nav>
  </div>
);

export default Navbar;

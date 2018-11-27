import React from 'react';
import './NavbarComponent.scss';
import { Link, NavLink } from 'react-router-dom';

const NavbarComponent = () => (
  <div className="navbar">
    <Link to="/" className="logo-link">
      <h1 className="logo">GIFStash</h1>
    </Link>

    <nav className="nav-items">
      <NavLink to="/your-gif-stash" className="nav-link">
        <i className="fas fa-heart"></i>
        Your GIFs
      </NavLink>
    </nav>
  </div>
);

export default NavbarComponent;

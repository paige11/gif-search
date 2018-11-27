import React from 'react';
import './NavbarComponent.scss';
import { Link, NavLink } from 'react-router-dom';

const NavbarComponent = () => (
  <div class="navbar">
    <Link to="/" className="logo-link">
      <h1 className="logo">GIFStash</h1>
    </Link>

    <nav className="nav-items">
      <NavLink to="/favorites" className="nav-link">
        <i class="fas fa-heart"></i>
        My GIFs
      </NavLink>
    </nav>
  </div>
);

export default NavbarComponent;

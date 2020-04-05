import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => (
  <nav className="nav">
    <ul>
      <li>
        <NavLink to="/" exact>Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/cars">Cars</NavLink>
      </li>
    </ul>
  </nav>
);

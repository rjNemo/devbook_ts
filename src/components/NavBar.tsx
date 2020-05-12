import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode} from '@fortawesome/free-solid-svg-icons';

/**
 * Main Navbar serves navigation routes.
 */
const NavBar: FC = () => (
  <nav className="navbar bg-dark">
    <h1>
      <a href="dashboard.html">
        <FontAwesomeIcon icon={faCode} /> DevBook
      </a>
    </h1>
    <ul>
      <li>
        <a href="profiles.html">Developers</a>
      </li>
      <li>
        <a href="register.html">Register</a>
      </li>
      <li>
        <a href="login.html">Login</a>
      </li>
    </ul>
  </nav>
);

export default NavBar;

import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode, faSignOutAlt, faUser} from '@fortawesome/free-solid-svg-icons';

interface IProps {
  isAuthenticated?: boolean;
  loading?: boolean;
}
/**
 * Main Navbar serves navigation routes.
 */
const NavBar: FC<IProps> = ({isAuthenticated = true, loading = false}) => {
  const publicLinks = (
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
  );

  const privateLinks = (
    <ul>
      <li>
        <a href="profiles.html">Developers</a>
      </li>
      <li>
        <a href="posts.html">Posts</a>
      </li>
      <li>
        <a href="dashboard.html">
          <FontAwesomeIcon icon={faUser} />
          <span className="hide-sm"> Dashboard</span>
        </a>
      </li>
      <li>
        <a href="login.html">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span className="hide-sm"> Log out</span>
        </a>
      </li>
    </ul>
  );

  /** Display appropriated links after loading given authenticated prop */
  const RenderLinks = !loading && isAuthenticated ? privateLinks : publicLinks;

  return (
    <nav className="navbar bg-dark">
      <h1>
        <a href="dashboard.html">
          <FontAwesomeIcon icon={faCode} /> DevBook
        </a>
      </h1>
      {RenderLinks}
    </nav>
  );
};

export default NavBar;

import React, {FC} from 'react';
// Routing
import {Link} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
//Redux
import {connect} from 'react-redux';
import {selectProfile} from '../store/firebase';
// Style
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode, faSignOutAlt, faUser} from '@fortawesome/free-solid-svg-icons';

interface IProps {
  isEmpty: boolean;
  isLoaded: boolean;
}

/**
 * Main Navbar serves navigation routes.
 */
const NavBar: FC<IProps> = ({isEmpty, isLoaded}) => {
  const publicLinks = (
    <ul data-testid="publicLinks">
      <li>
        <Link to={ROUTES.DEVELOPERS} data-testid="devsLink">
          Developers
        </Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_UP} data-testid="signupLink">
          Register
        </Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN} data-testid="loginLink">
          Login
        </Link>
      </li>
    </ul>
  );

  const privateLinks = (
    <ul data-testid="privateLinks">
      <li>
        <Link to={ROUTES.DEVELOPERS} data-testid="devsLink">
          Developers
        </Link>
      </li>
      <li>
        <Link to={ROUTES.POSTS} data-testid="postsLink">
          Posts
        </Link>
      </li>
      <li>
        <Link to={ROUTES.DASHBOARD} data-testid="dashboardLink">
          <FontAwesomeIcon icon={faUser} />
          <span className="hide-sm"> Dashboard</span>
        </Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN} data-testid="logoutLink">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span className="hide-sm"> Log out</span>
        </Link>
      </li>
    </ul>
  );

  /** Display appropriated links after loading given authenticated prop */
  const RenderLinks = isLoaded && !isEmpty ? privateLinks : publicLinks;

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to={ROUTES.LANDING} data-testid="homeLink">
          <FontAwesomeIcon icon={faCode} /> DevBook
        </Link>
      </h1>
      {RenderLinks}
    </nav>
  );
};

/** connect HOC subscribes to the store */
export default connect(selectProfile)(NavBar);

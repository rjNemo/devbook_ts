import React, {FC} from 'react';
// Routing
import {Link} from 'react-router-dom';
import Routes from '../constants/routes';
//Redux
import {WithFirebaseProps} from 'react-redux-firebase';
import {enhance} from '../store/firebase';
// Style
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode, faSignOutAlt, faUser} from '@fortawesome/free-solid-svg-icons';
// Typing
import User from '../models/User';

interface IProps extends WithFirebaseProps<User> {
  isEmpty: boolean;
  isLoaded: boolean;
}

/**
 * Main Navbar serves navigation Routes.
 */
const NavBar: FC<IProps> = ({firebase, isEmpty, isLoaded}) => {
  const publicLinks = (
    <ul data-testid="publicLinks">
      <li>
        <Link to={Routes.DEVELOPERS} data-testid="devsLink">
          Developers
        </Link>
      </li>
      <li>
        <Link to={Routes.SIGN_UP} data-testid="signupLink">
          Register
        </Link>
      </li>
      <li>
        <Link to={Routes.SIGN_IN} data-testid="loginLink">
          Login
        </Link>
      </li>
    </ul>
  );

  const privateLinks = (
    <ul data-testid="privateLinks">
      <li>
        <Link to={Routes.DEVELOPERS} data-testid="devsLink">
          Developers
        </Link>
      </li>
      <li>
        <Link to={Routes.POSTS} data-testid="postsLink">
          Posts
        </Link>
      </li>
      <li>
        <Link to={Routes.DASHBOARD} data-testid="dashboardLink">
          <FontAwesomeIcon icon={faUser} />
          <span className="hide-sm"> Dashboard</span>
        </Link>
      </li>
      <li>
        <Link
          to={Routes.SIGN_IN}
          data-testid="logoutLink"
          onClick={() => firebase.logout()}
        >
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
        <Link to={Routes.LANDING} data-testid="homeLink">
          <FontAwesomeIcon icon={faCode} /> DevBook
        </Link>
      </h1>
      {RenderLinks}
    </nav>
  );
};

/** connect HOC subscribes to the store */
export default enhance(NavBar);

import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import Header from '../components/Header';

/**
 * Landing page
 */
const Landing: FC = () => (
  <section className="landing">
    <div className="dark-overlay">
      <div className="landing-inner">
        <Header
          title="DevBook"
          lead="Create developer profiles, portfolio, share and get help from other devs"
          icon="code"
        />
        <div className="buttons">
          <Link to={ROUTES.SIGN_UP} className="btn btn-primary">
            Sign up
          </Link>
          <Link to={ROUTES.SIGN_IN} className="btn btn-light">
            Login
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Landing;

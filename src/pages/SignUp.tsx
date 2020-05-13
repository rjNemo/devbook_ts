import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import * as ROUTES from '../constants/routes';
/**
 * Sign up form
 */
const SignUp: FC = () => (
  <section className="container">
    <Header title="Sign Up" lead="Create your account" />
    <form action="dashboard.html" className="form">
      <div className="form-group">
        <input type="text" placeholder="Name" required />
      </div>
      <div className="form-group">
        <input type="email" placeholder="Email Address" />
        <small className="form-text">
          This site uses Gravatar, so use a Gravatar email.
        </small>
      </div>
      <div className="form-group">
        <input type="password" placeholder="Password" minLength={6} />
      </div>
      <div className="form-group">
        <input type="password" placeholder="Confirm Password" minLength={6} />
      </div>
      <input type="submit" value="Register" className="btn btn-primary" />
    </form>
    <p className="my-1">
      Already have an account? <Link to={ROUTES.SIGN_IN}>Sign in</Link>
    </p>
  </section>
);

export default SignUp;

import React, {FC} from 'react';
import * as ROUTES from '../constants/routes';
import Header from '../components/Header';
import {Link} from 'react-router-dom';

/**
 * Sign in form
 */
const SignIn: FC = () => (
  <section className="container">
    <div className="alert alert-danger">Invalid credentials</div>
    <Header title="Sign In" lead="Sign into your account" />
    <form action="dashboard.html" className="form">
      <div className="form-group">
        <input type="email" placeholder="Email Address" />
      </div>
      <div className="form-group">
        <input type="password" placeholder="Password" minLength={6} />
      </div>

      <input type="submit" value="Login" className="btn btn-primary" />
    </form>
    <p className="my-1">
      Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign up</Link>
    </p>
  </section>
);

export default SignIn;

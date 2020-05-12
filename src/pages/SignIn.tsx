import React, {FC} from 'react';
import Header from '../components/Header';

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
      Don't have an account? <a href="register.html">Sign in</a>
    </p>
  </section>
);

export default SignIn;

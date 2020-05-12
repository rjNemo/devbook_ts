import React, {FC} from 'react';

const SignUp: FC = () => (
  <section className="container">
    <div className="alert alert-danger">Invalid credentials</div>
    <h1 className="large text-primary">Sign In</h1>
    <p className="lead">
      <i className="fa fa-user"></i> Sign into your account
    </p>
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

export default SignUp;

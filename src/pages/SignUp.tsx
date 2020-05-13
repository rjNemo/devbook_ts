import React, {FC, useState} from 'react';
// Routing
import {Link} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
// Style
import Header from '../components/Header';
import InputField from '../components/InputField';

/**
 * Sign up form
 */
const SignUp: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(false);

  const isDisabled: boolean =
    name === '' || email === '' || password1 === '' || password1 !== password2;

  return (
    <section className="container">
      {error && <div className="alert alert-danger">Invalid credentials</div>}
      <Header title="Sign Up" lead="Create your account" />
      <form action="dashboard.html" className="form">
        <InputField
          state={name}
          setState={setName}
          placeholder="Name"
          required
          autoFocus
        />

        <InputField
          state={email}
          setState={setEmail}
          placeholder="Email Address"
          required
        />
        <small className="form-text">
          This site uses Gravatar, so use a Gravatar email.
        </small>

        <InputField
          state={password1}
          setState={setPassword1}
          placeholder="Password"
          type="password"
          minLength={6}
          required
        />
        <InputField
          state={password2}
          setState={setPassword2}
          placeholder="Confirm Password"
          type="password"
          minLength={6}
          required
        />

        <input
          type="submit"
          value="Register"
          className="btn btn-primary"
          disabled={isDisabled}
        />
      </form>
      <p className="my-1">
        Already have an account? <Link to={ROUTES.SIGN_IN}>Sign in</Link>
      </p>
    </section>
  );
};

export default SignUp;

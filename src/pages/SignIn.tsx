import React, {FC, useState} from 'react';
// Redux
import {WithFirebaseProps} from 'react-redux-firebase';
import {enhance} from '../store/firebase';
// Routing
import {Link, Redirect} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
// Style
import GoogleButton from 'react-google-button';
import Header from '../components/Header';
import Alert from '../components/Alert';
// Typing
import User from '../models/User';
// Form
import useForm from '../hooks';

interface InitFormData {
  email: string;
  password: string;
}

interface IProps extends WithFirebaseProps<User> {
  isEmpty: boolean;
  isLoaded: boolean;
}

/**
 * Sign in form
 */
const SignIn: FC<IProps> = ({firebase, isEmpty, isLoaded}) => {
  const [error, setError] = useState<any>(null);

  // handle form data
  const initFormData: InitFormData = {
    email: '',
    password: '',
  };
  const {formData, handleChange, resetForm} = useForm<InitFormData>(
    initFormData,
  );
  const {email, password} = formData;

  // prevent submitting invalid forms
  const isDisabled: boolean = email === '' || password === '';

  /** create user with password */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    firebase
      .login({email, password})
      .then(() => resetForm())
      .catch(err => setError(err));
  };

  const loginWithGoogle = () =>
    firebase.login({provider: 'google', type: 'popup'});

  // redirect to dashboard if connected
  if (isLoaded && !isEmpty) {
    return <Redirect to={ROUTES.DASHBOARD} />;
  }

  return (
    <section className="container">
      {error && <Alert text={error?.message} />}
      <Header title="Sign In" lead="Sign into your account" />
      <GoogleButton type="light" className="my-1" onClick={loginWithGoogle} />
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <input
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email Address"
            type="email"
            required
            autoFocus
          />
        </div>
        <div className="form-group">
          <input
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            type="password"
            minLength={6}
            required
          />
        </div>

        <input
          type="submit"
          value="Login"
          className="btn btn-primary"
          disabled={isDisabled}
        />
      </form>
      <p className="my-1">
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign up</Link>
      </p>
    </section>
  );
};

/** subscribe to store and firebase */
export default enhance(SignIn);

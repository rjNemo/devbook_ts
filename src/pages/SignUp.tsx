import React, {FC, useState} from 'react';
// Routing
import {Link, useHistory, Redirect} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
// Redux
import {compose} from 'redux';
import {connect} from 'react-redux';
import {withFirebase, WithFirebaseProps} from 'react-redux-firebase';
import {selectProfile} from '../store/firebase';
import User, {newUser} from '../models/User';
// Style
import GoogleButton from 'react-google-button';
import Alert from '../components/Alert';
import Header from '../components/Header';
// Form
import useForm from '../hooks';

// extends withFirebaseProps type to ad profile info
interface IProps extends WithFirebaseProps<User> {
  isEmpty: boolean;
  isLoaded: boolean;
}

interface InitFormData {
  name: string;
  email: string;
  password: string;
  password2: string;
}

/**
 * Sign up form recieves firebase from withFirebase HOC
 */
const SignUp: FC<IProps> = ({firebase, isEmpty, isLoaded}) => {
  const history = useHistory();
  const [error, setError] = useState<any>(null);

  // handle form data
  const initFormData: InitFormData = {
    name: '',
    email: '',
    password: '',
    password2: '',
  };

  const {formData, handleChange, resetForm} = useForm<InitFormData>(
    initFormData,
  );

  const {name, email, password, password2} = formData;

  // prevent submitting invalid forms
  const isDisabled: boolean = name === '' || email === '' || password === '';

  /** create user with password */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // pass the info to store into the second argument
    firebase
      .createUser({email, password}, newUser(name, email))
      .then(() => resetForm())
      .catch(err => setError(err));
  };

  const loginWithGoogle = () =>
    firebase.login({provider: 'google', type: 'popup'});

  if (isLoaded && !isEmpty) {
    return <Redirect to={ROUTES.DASHBOARD} />;
  }

  return (
    <section className="container">
      {error && <Alert text={error?.message} />}
      <Header title="Sign Up" lead="Create your account" />
      <GoogleButton type="light" className="my-1" onClick={loginWithGoogle} />
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
            type="text"
            required
            autoFocus
          />
        </div>

        <div className="form-group">
          <input
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email Address"
            type="email"
            required
          />
          <small className="form-text">
            This site uses Gravatar, so use a Gravatar email.
          </small>
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

        <div className="form-group">
          <input
            name="password2"
            value={password2}
            onChange={handleChange}
            placeholder="Confirm Password"
            type="password"
            minLength={6}
            required
          />
        </div>

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

/** subscribe to store and firebase */
const enhance = compose<FC<IProps>>(connect(selectProfile), withFirebase);

export default enhance(SignUp);

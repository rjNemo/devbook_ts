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
import Header from '../components/Header';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import GoogleButton from 'react-google-button';

// extends withFirebaseProps type to ad profile info
interface IProps extends WithFirebaseProps<User> {
  isEmpty: boolean;
  isLoaded: boolean;
}

/**
 * Sign up form recieves firebase from withFirebase HOC
 */
const SignUp: FC<IProps> = ({firebase, isEmpty, isLoaded}) => {
  const history = useHistory();

  const initFormData = {
    name: '',
    email: '',
    password: '',
    password2: '',
    error: false,
  };
  const [formData, setFormData] = useState(initFormData);

  /** update each input state value onChange */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  /** clean form after successful submition */
  const resetForm = () => setFormData(initFormData);

  const {name, email, password, password2, error} = formData;

  // prevent submitting invalid forms
  const isDisabled: boolean = name === '' || email === '' || password === '';

  /** create user with password */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== password2) {
      setFormData({...formData, error: true});
    } else {
      // pass the info to store into the second argument
      firebase
        .createUser({email, password}, newUser(name, email))
        .then(() => {
          resetForm();
          // redirect to dashboard
          history.push(ROUTES.DASHBOARD);
        })
        .catch(err => console.error(err));
    }
  };

  const loginWithGoogle = () =>
    firebase.login({provider: 'google', type: 'popup'});

  if (isLoaded && !isEmpty) {
    return <Redirect to={ROUTES.DASHBOARD} />;
  }

  return (
    <section className="container">
      {error && (
        <div className="alert alert-danger">
          <FontAwesomeIcon icon={faExclamationTriangle} /> Passwords don't
          match!
        </div>
      )}
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

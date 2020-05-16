// Redux
import {createFirestoreInstance} from 'redux-firestore';
import store from '..';
// Firebase
import firebase from '../../services/firebase';
// Typing
import Dev from '../../models/Dev';

// react-redux-firebase config
const RRF_CONFIG = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};
// object required by RRFProvider
const rrfProps = {
  firebase,
  config: RRF_CONFIG,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

// Firestore Schema
export interface Schema {
  devs: Dev;
}

export default rrfProps;

//Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
// Redux
import store from '..';

const CONFIG = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// initialize firebase
firebase.initializeApp(CONFIG);

// react-redux-firebase config
const RRF_CONFIG = {
  // userProfile: 'users'
};
// object required by RRFProvider
const rrfProps = {
  firebase,
  config: RRF_CONFIG,
  dispatch: store.dispatch,
};

export default rrfProps;

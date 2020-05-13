// Redux
import store from '..';
// Firebase
import firebase from '../../services/firebase';

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

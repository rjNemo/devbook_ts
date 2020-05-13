// Redux
import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth/';
// Firebase
import {
  firebaseReducer,
  FirebaseReducer,
  firestoreReducer,
} from 'react-redux-firebase';
// Typing
import User from '../models/User';
import {Schema} from './firebase/config';

const store = configureStore({
  reducer: {
    // auth: authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
  },
});

// State type
export interface RootState {
  firebase: FirebaseReducer.Reducer<User, Schema>;
}

export default store;

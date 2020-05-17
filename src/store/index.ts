// Redux
import {configureStore} from '@reduxjs/toolkit';
// Firebase
import {
  firebaseReducer,
  FirebaseReducer,
  FirestoreReducer,
} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';
// Typing
import {Schema} from './firebase/config';
import Dev from '../models/Dev';

const store = configureStore({
  reducer: {
    firebase: firebaseReducer,
    firestore: firestoreReducer,
  },
});

// State type
export interface RootState {
  firebase: FirebaseReducer.Reducer<Dev, Schema>;
  firestore: FirestoreReducer.Reducer;
}

export default store;

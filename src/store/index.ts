// Redux
import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth/';
// Firebase
import {firebaseReducer} from 'react-redux-firebase';

const store = configureStore({
  reducer: {
    auth: authReducer,
    firebase: firebaseReducer,
  },
});

// State type
export type RootState = ReturnType<typeof store.getState>;

export default store;

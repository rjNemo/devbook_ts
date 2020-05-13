// Redux
import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth/';
// Firebase
import {firebaseReducer, FirebaseReducer} from 'react-redux-firebase';

const store = configureStore({
  reducer: {
    auth: authReducer,
    firebase: firebaseReducer,
  },
});

// State type
export interface RootState {
  firebase: FirebaseReducer.Reducer;
}
// export type RootState = ReturnType<typeof store.getState>;

export default store;

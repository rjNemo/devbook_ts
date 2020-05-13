import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth/';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// State type
export type RootState = ReturnType<typeof store.getState>;

export default store;

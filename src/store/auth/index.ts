// Redux
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '..';
// Typing
import User from '../../models/User';

interface SliceState {
  isAuthenticated: boolean;
  loading: boolean;
  user: User | null;
  error: string | null;
}

const initialState: SliceState = {
  isAuthenticated: false,
  loading: true,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

// export actions
export const {} = authSlice.actions;

// export selectors
export const selectAuthState = (state: RootState) => {
  const {isAuthenticated, loading} = state.auth;
  return {isAuthenticated, loading};
};

// export reducer
export default authSlice.reducer;

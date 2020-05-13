import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '..';

interface SliceState {
  isAuthenticated: boolean;
  loading: boolean;
  // TODO: switch any by the actual user interface
  user: any;
}

const initialState: SliceState = {
  isAuthenticated: false,
  loading: true,
  user: null,
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

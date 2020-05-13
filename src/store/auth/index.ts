import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    loading: true,
    user: null,
  },
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;

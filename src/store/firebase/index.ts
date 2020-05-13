import {RootState} from '..';

/** export firebase authentication */
export const selectAuthState = (state: RootState) => state.firebase.auth;

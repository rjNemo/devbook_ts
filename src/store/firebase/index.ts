import {RootState} from '..';

/** export firebase authentication */
export const selectAuthState = (state: RootState) => state.firebase.auth;
/** export current user profile */
export const selectProfile = (state: RootState) => state.firebase.profile;

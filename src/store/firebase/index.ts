import {FC} from 'react';
// Redux
import {compose} from '@reduxjs/toolkit';
import {connect} from 'react-redux';
import {withFirebase} from 'react-redux-firebase';
import {RootState} from '..';

/** export firebase authentication */
export const selectAuthState = (state: RootState) => state.firebase.auth;
/** export current user profile */
export const selectProfile = (state: RootState) => state.firebase.profile;
/** subscribe to firebase and profile */
export const enhance = compose<FC>(connect(selectProfile), withFirebase);

import React, {FC} from 'react';
// Routing
import {BrowserRouter} from 'react-router-dom';
import Router from './router/Router';
import NavBar from './components/NavBar';
// Redux
import {Provider, useSelector} from 'react-redux';
import store from './store';
// Firebase
import {ReactReduxFirebaseProvider, isLoaded} from 'react-redux-firebase';
import rrfProps from './store/firebase/config';
import {selectAuthState} from './store/firebase';

/**
 * Main App container
 * Redux provides state management
 * RRF to bind to Firebase
 * */
const App: FC = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <AuthApp />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

/**
 * Display a loading screen while fetching authentication state
 */
const AuthApp: FC = () => {
  const auth = useSelector(selectAuthState);
  if (!isLoaded(auth)) {
    // TODO: insert Splash Screen here
    return <div>Loading...</div>;
  }
  return (
    <>
      <NavBar />
      <Router />
    </>
  );
};

export default App;

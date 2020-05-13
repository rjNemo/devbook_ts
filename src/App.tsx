import React, {FC} from 'react';
// Routing
import {BrowserRouter} from 'react-router-dom';
import Router from './router/Router';
import NavBar from './components/NavBar';
// Redux
import {Provider} from 'react-redux';
import store from './store';
// Firebase
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import rrfProps from './store/firebase';

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
          <NavBar />
          <Router />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default App;

import React, {FC} from 'react';
// Routing
import {BrowserRouter} from 'react-router-dom';
import Router from './router/Router';
import NavBar from './components/NavBar';
// Redux
import {Provider} from 'react-redux';
import store from './store';

/**
 * Main App container
 * Redux provides state management
 * */
const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Router />
      </BrowserRouter>
    </Provider>
  );
};

export default App;

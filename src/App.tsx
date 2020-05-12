import React, {FC} from 'react';
import {BrowserRouter} from 'react-router-dom';
import NavBar from './components/NavBar';
import Router from './router/Router';

/** Main App container */
const App: FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  );
};

export default App;

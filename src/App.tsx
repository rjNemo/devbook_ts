import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode} from '@fortawesome/free-solid-svg-icons';
const App = () => {
  return (
    <>
      <nav className="navbar bg-dark">
        <h1>
          <a href="dashboard.html">
            <FontAwesomeIcon icon={faCode} /> {'  '} DevBook
          </a>
        </h1>
        <ul>
          <li>
            <a href="profiles.html">Developers</a>
          </li>
          <li>
            <a href="register.html">Register</a>
          </li>
          <li>
            <a href="login.html">Login</a>
          </li>
        </ul>
      </nav>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">DevBook</h1>
            <p className="lead">
              Create developer profiles, portfolio, share and get help from
              other devs
            </p>
            <div className="buttons">
              <a href="register.html" className="btn btn-primary">
                Sign up
              </a>
              <a href="login.html" className="btn btn-light">
                Login
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;

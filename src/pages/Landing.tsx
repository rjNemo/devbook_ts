import React, {FC} from 'react';

const Landing: FC = () => (
  <section className="landing">
    <div className="dark-overlay">
      <div className="landing-inner">
        <h1 className="x-large">DevBook</h1>
        <p className="lead">
          Create developer profiles, portfolio, share and get help from other
          devs
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
);

export default Landing;

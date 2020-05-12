import React from 'react';
import Header from '../components/Header';

const Developers = () => (
  <section className="container">
    <Header
      title="Developers"
      lead="Browse and connect with developers"
      icon="connectdevelop"
    />

    <div className="profiles">
      <div className="profile bg-light">
        <img
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
          alt="Some guy"
          className="round-img"
        />
        <div>
          <h2>John Doe</h2>
          <p>Developer at Microsoft</p>
          <p>Seattle, WA</p>
          <a href="profile.html" className="btn btn-primary">
            View Profile
          </a>
        </div>
        <ul>
          <li className="text-primary">
            <i className="fa fa-check">HTML</i>
          </li>

          <li className="text-primary">
            <i className="fa fa-check">CSS</i>
          </li>
          <li className="text-primary">
            <i className="fa fa-check">JavaScript</i>
          </li>

          <li className="text-primary">
            <i className="fa fa-check">Python</i>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Developers;

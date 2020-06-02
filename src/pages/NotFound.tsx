import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Routes from '../constants/routes';

const NotFound: FC = () => (
  <section className="not-found">
    <div className="dark-overlay">
      <div className="landing-inner">
        <Header
          title="Nothing Here"
          lead="Sorry the page requested does not exist."
          icon="not-found"
        />
        <div className="buttons">
          <Link to={Routes.SIGN_UP} className="btn btn-primary">
            Sign up
          </Link>
          <Link to={Routes.SIGN_IN} className="btn btn-light">
            Login
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default React.memo(NotFound);

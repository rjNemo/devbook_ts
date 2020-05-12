import React, {FC} from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from '../pages/Landing';
import SignUp from '../pages/SignUp';

const Router: FC = () => (
  <Switch>
    <Route exact path={'/'} component={Landing} />
    <Route exact path={'/signup'} component={SignUp} />
  </Switch>
);

export default Router;

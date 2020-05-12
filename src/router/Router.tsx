import React, {FC} from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from '../pages/Landing';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import * as ROUTES from '../constants/routes';

const Router: FC = () => (
  <Switch>
    <Route exact path={ROUTES.LANDING} component={Landing} />
    <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
    <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
  </Switch>
);

export default Router;

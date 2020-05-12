import React, {FC} from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from '../pages/Landing';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Developers from '../pages/Developers';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import Dashboard from '../pages/Dashboard';
import * as ROUTES from '../constants/routes';

const Router: FC = () => (
  <Switch>
    <Route exact path={ROUTES.LANDING} component={Landing} />
    <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
    <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
    <Route exact path={ROUTES.DEVELOPERS} component={Developers} />
    <Route exact path={ROUTES.PROFILE} component={Profile} />
    <Route exact path={ROUTES.EDIT_PROFILE} component={EditProfile} />
    <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
  </Switch>
);

export default Router;

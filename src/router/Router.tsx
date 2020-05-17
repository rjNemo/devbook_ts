import React, {FC} from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from '../pages/Landing';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Developers from '../pages/Developers';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import Dashboard from '../pages/Dashboard';
import AddExperience from '../pages/AddExperience';
import AddEducation from '../pages/AddEducation';
import PostPage from '../pages/Post';
import Posts from '../pages/Posts';
import NotFound from '../pages/NotFound';
import Routes from '../constants/routes';
import PrivateRoute from './PrivateRoute';

/** Register navigation paths accessible */
const Router: FC = () => (
  <Switch>
    <Route exact path={Routes.LANDING} component={Landing} />
    <Route exact path={Routes.SIGN_UP} component={SignUp} />
    <Route exact path={Routes.SIGN_IN} component={SignIn} />
    <Route exact path={Routes.DEVELOPERS} component={Developers} />
    <Route exact path={`${Routes.PROFILE}/:id`} component={Profile} />
    <PrivateRoute exact path={Routes.EDIT_PROFILE} component={EditProfile} />
    <PrivateRoute exact path={Routes.DASHBOARD} component={Dashboard} />
    <PrivateRoute
      exact
      path={Routes.ADD_EXPERIENCE}
      component={AddExperience}
    />
    <PrivateRoute exact path={Routes.ADD_EDUCATION} component={AddEducation} />
    <PrivateRoute exact path={Routes.POST} component={PostPage} />
    <PrivateRoute exact path={Routes.POSTS} component={Posts} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;

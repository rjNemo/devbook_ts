import React, {FC} from 'react';
// Routing
import {Route, Redirect} from 'react-router-dom';
import Routes from '../constants/routes';
// Redux
import {isLoaded, isEmpty} from 'react-redux-firebase';
import {useSelector} from 'react-redux';
import {RootState} from '../store';

interface IProps {
  exact?: boolean;
  path: string;
  component: React.FC<any>;
}
/**
 * Redirects to the login screen if you're not authenticated yet or
 * if auth is not loaded yet
 */
const PrivateRoute: FC<IProps> = ({
  component: Component,
  exact,
  path,
  ...rest
}) => {
  const auth = useSelector((state: RootState) => state.firebase.auth);
  const profile = useSelector((state: RootState) => state.firebase.profile);
  const isActive = profile.isActive;
  return (
    <Route
      exact={exact}
      path={path}
      {...rest}
      render={({location, ...rest}) =>
        isLoaded(auth) && !isEmpty(auth) && isActive ? (
          <Component {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: Routes.SIGN_IN,
              state: {from: location},
            }}
          />
        )
      }
    />
  );
};

/** subscribe to store and firebase */
export default PrivateRoute;

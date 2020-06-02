import React, {FC} from 'react';
// Redux
import {compose} from '@reduxjs/toolkit';
import {firestoreConnect} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {RootState} from '../../store';
// Routing
import {Link, useParams} from 'react-router-dom';
import Routes from '../../constants/routes';
import NotFound from '../NotFound';
// Typing
import IDev from '../../models/Dev';

import ProfileTop from './Top';
import ProfileAbout from './About';
import ProfileExperience from './Experience';
import ProfileEducation from './Education';
import ProfileGithub from './Github';
import Collections from '../../constants/collections';

interface IProps {
  dev: IDev;
}

/**
 * Dev personal profile as seen by other people.
 */
const ProfileComponent: FC<IProps> = ({dev}) => {
  // display 404 page if dev is null
  if (dev === null) {
    return <NotFound />;
  }

  return dev === undefined ? (
    <div>Loading ... </div>
  ) : (
    <section className="container">
      <Link to={Routes.DEVELOPERS} className="btn">
        Back to profiles
      </Link>

      <div className="profile-grid my-1">
        <ProfileTop {...dev} />
        <ProfileAbout {...dev} />
        <ProfileExperience experiences={dev.experiences} />
        <ProfileEducation educations={dev.educations} />
        <ProfileGithub repos={dev.repos} />
      </div>
    </section>
  );
};

/**
 * Container to fetch id params from thr URI and pass it to Profile page
 */
const Profile: FC = () => {
  const {id} = useParams();

  const Component = compose<FC>(
    firestoreConnect(() => [`${Collections.USERS}/${id}`]),
    connect(({firestore: {data}}: RootState) => ({
      dev: data.users && data.users[id],
    })),
  )(ProfileComponent);

  return <Component />;
};

export default Profile;

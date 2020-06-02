import React, {FC, MouseEvent} from 'react';
// Redux
import {WithFirebaseProps} from 'react-redux-firebase';
import {enhance} from '../../store/firebase';
// Style
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserSlash} from '@fortawesome/free-solid-svg-icons';

import DashBoardButtons from './Buttons';
import Header from '../../components/Header';
// Types
import Dev from '../../models/Dev';
import User from '../../models/User';
import Experience from '../../types/Experience';
import Education from '../../types/Education';
import DashboardExperienceSection from './ExperienceSection';
import DashboardEducationSection from './EducationSection';

interface IProps extends Dev, WithFirebaseProps<User> {}
/**
 * Main page from which a Dev can peek and edit its own profile.
 */
const Dashboard: FC<IProps> = ({
  firebase,
  displayName,
  experiences,
  educations,
}) => {
  /** turns account to inactive then logs user out */
  const deleteAccount = () => {
    firebase.updateProfile({isActive: false}, {useSet: true, merge: true});
    firebase.logout();
  };

  /**
   *
   * @param id key of the entry to remove
   * @param entries array of credential educations
   */
  const deleteEduEntry = (id: number, entries: Education[]) => (
    e: MouseEvent<HTMLButtonElement>,
  ) => {
    firebase.updateProfile({
      educations: entries.filter((e: Education) => e.id !== id),
    });
  };
  /**
   *
   * @param id key of the entry to remove
   * @param entries array of credential experiences
   */
  const deleteExpEntry = (id: number, entries: Experience[]) => (
    e: MouseEvent<HTMLButtonElement>,
  ) => {
    firebase.updateProfile({
      experiences: entries.filter((e: Experience) => e.id !== id),
    });
  };

  return (
    <section className="container">
      <Header title="Dashboard" lead={`Welcome ${displayName}`} />
      <DashBoardButtons />

      <DashboardExperienceSection
        experiences={experiences}
        handleDelete={deleteExpEntry}
      />

      <DashboardEducationSection
        educations={educations}
        handleDelete={deleteEduEntry}
      />

      <div className="my-2">
        <button className="btn btn-danger" onClick={deleteAccount}>
          <FontAwesomeIcon icon={faUserSlash} /> Delete my Account
        </button>
      </div>
    </section>
  );
};

export default enhance(Dashboard);

import React, {FC} from 'react';
// Redux
import {compose} from '@reduxjs/toolkit';
import {connect} from 'react-redux';
import {withFirebase, WithFirebaseProps} from 'react-redux-firebase';
import {selectProfile} from '../store/firebase';
// Style
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faGraduationCap,
  faUserSlash,
} from '@fortawesome/free-solid-svg-icons';
import {faBlackTie} from '@fortawesome/free-brands-svg-icons';
import Header from '../components/Header';
// Types
import Dev from '../models/Dev';
import User from '../models/User';
import Experience from '../types/Experience';
import {getTimePeriod} from '../types/TimePeriod';
import Education from '../types/Education';

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
  const logout = () => firebase.logout();
  return (
    <section className="container">
      <Header title="Dashboard" lead={`Welcome ${displayName}`} />
      <div className="dash-buttons">
        <a href="create-profile.html" className="btn btn-light">
          <FontAwesomeIcon icon={faUserCircle} /> Edit Profile
        </a>
        <a href="add-experience.html" className="btn btn-light">
          <FontAwesomeIcon icon={faBlackTie} /> Add Experience
        </a>
        <a href="add-education.html" className="btn btn-light">
          <FontAwesomeIcon icon={faGraduationCap} /> Add Education
        </a>
      </div>

      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {experiences?.map((exp: Experience, i: number) => (
            <tr key={i}>
              <td>{exp.company}</td>
              <td className="hide-sm">{exp.position}</td>
              <td className="hide-sm">{getTimePeriod(exp.from, exp.to)}</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {educations?.map((edu: Education, i: number) => (
            <tr key={i}>
              <td>{edu.school}</td>
              <td className="hide-sm">{edu.field}</td>
              <td className="hide-sm">{getTimePeriod(edu.from, edu.to)}</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="my-2">
        <button className="btn btn-danger" onClick={logout}>
          <FontAwesomeIcon icon={faUserSlash} /> Delete my Account
        </button>
      </div>
    </section>
  );
};

const enhance = compose<FC>(connect(selectProfile), withFirebase);
export default enhance(Dashboard);

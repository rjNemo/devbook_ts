import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCircle, faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import {faBlackTie} from '@fortawesome/free-brands-svg-icons';
import Header from '../components/Header';
import DevFull, {dummyDevFull as dev} from '../models/DevFull';

import Experience from '../models/Experience';
import {getTimePeriod} from '../types/TimePeriod';

const Dashboard: FC<DevFull> = () => {
  return (
    <section className="container">
      <Header title="Dashboard" lead={`Welcome ${dev.name}`} />
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
          {dev.experiences.map((exp: Experience, i: number) => (
            <tr>
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
          <tbody>
            <tr>
              <td>University of Washington</td>
              <td className="hide-sm">Computer Science</td>
              <td className="hide-sm">Sep 1993 - June 1999</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </thead>
      </table>
      <div className="my-2">
        <button className="btn btn-danger">
          <i className="fa fa-user"></i> Delete my Account
        </button>
      </div>
    </section>
  );
};

export default Dashboard;

import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Header from '../components/Header';
import DevFull, {dummyDevFull as dev} from '../models/DevFull';
import {faUserCircle, faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import {faBlackTie} from '@fortawesome/free-brands-svg-icons';

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
          <tbody>
            <tr>
              <td>Microsoft</td>
              <td className="hide-sm">Senior Developer</td>
              <td className="hide-sm">Oct 2011 - Current</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Sun Microsystems</td>
              <td className="hide-sm">System Admin</td>
              <td className="hide-sm">Oct 2004 - Nov 2010</td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </thead>
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

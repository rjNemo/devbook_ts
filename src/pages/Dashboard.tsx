import React from 'react';

const Dashboard = () => {
  return (
    <section className="container">
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fa fa-user"></i> Welcome John
      </p>
      <div className="dash-buttons">
        <a href="create-profile.html" className="btn btn-light">
          {' '}
          <i className="fa fa-user-circle text-primary"></i> Edit Profile
        </a>
        <a href="add-experience.html" className="btn btn-light">
          {' '}
          <i className="fa fa-black-tie text-primary"></i> Add Experience
        </a>
        <a href="add-education.html" className="btn btn-light">
          {' '}
          <i className="fa fa-graduation-cap text-primary"></i> Add Education
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

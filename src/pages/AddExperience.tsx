import React, {FC} from 'react';
import FormHeader from '../components/FormHeader';

const AddExperience: FC = () => {
  return (
    <section className="container">
      <FormHeader
        title="Add An Experience"
        lead="Add any developer/programming
        positions that you have had in the past"
        icon="code-branch"
      />

      <form className="form">
        <div className="form-group">
          <input type="text" placeholder="* Job Title" name="title" required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Company" name="company" required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" />
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input type="date" name="to" />
        </div>
        <div className="form-group">
          <p>
            <input type="checkbox" name="current" value="" /> Current Job
          </p>
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols={30}
            rows={5}
            placeholder="Job Description"
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" value="Submit" />
        <a className="btn btn-light my-1" href="dashboard.html">
          Go Back
        </a>
      </form>
    </section>
  );
};

export default AddExperience;

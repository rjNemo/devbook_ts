import React, {FC} from 'react';
// Routing
import {Link} from 'react-router-dom';
import Routes from '../../constants/routes';

import {IExperienceForm} from '.';

interface IProps {
  isDisabled: boolean;
  formData: IExperienceForm;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  handleCheckboxesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddExperienceForm: FC<IProps> = ({
  handleSubmit,
  formData,
  handleChange,
  handleCheckboxesChange,
  isDisabled,
}) => (
  <form className="form" onSubmit={handleSubmit}>
    <div className="form-group">
      <input
        type="text"
        placeholder="* Job Title"
        name="position"
        required
        value={formData.position}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <input
        type="text"
        placeholder="* Company"
        name="company"
        required
        value={formData.company}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <input
        type="text"
        placeholder="Location"
        name="location"
        value={formData.location}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <h4>From Date</h4>
      <input
        type="date"
        name="from"
        value={formData.from}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <h4>To Date</h4>
      <input
        type="date"
        name="to"
        value={formData.to}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <p>
        <input
          type="checkbox"
          name="current"
          checked={formData.current}
          onChange={handleCheckboxesChange}
        />{' '}
        Current Job
      </p>
    </div>
    <div className="form-group">
      <textarea
        name="description"
        cols={30}
        rows={5}
        placeholder="Job Description"
        value={formData.description}
        onChange={handleChange}
      ></textarea>
    </div>
    <input
      type="submit"
      className="btn btn-primary my-1"
      value="Submit"
      disabled={isDisabled}
    />
    <Link className="btn btn-light my-1" to={Routes.DASHBOARD}>
      Go Back
    </Link>
  </form>
);

export default AddExperienceForm;

import React, {FC} from 'react';
// Routing
import {Link} from 'react-router-dom';
import Routes from '../../constants/routes';

import {IEducationForm} from '.';

interface IProps {
  isDisabled: boolean;
  formData: IEducationForm;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  handleCheckboxesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddEducationForm: FC<IProps> = ({
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
        placeholder="* School or Bootcamp"
        name="school"
        value={formData.school}
        onChange={handleChange}
        required
        autoFocus
      />
    </div>
    <div className="form-group">
      <input
        type="text"
        placeholder="* Degree or Certificate"
        name="degree"
        value={formData.degree}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <input
        type="text"
        placeholder="Field Of Study"
        name="field"
        value={formData.field}
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
        Current School
      </p>
    </div>
    <div className="form-group">
      <textarea
        name="description"
        cols={30}
        rows={5}
        placeholder="Program Description"
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

export default AddEducationForm;

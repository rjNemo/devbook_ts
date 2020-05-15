import React, {FC, useState} from 'react';
import FormHeader from '../components/FormHeader';
import {enhance} from '../store/firebase';
import Routes from '../constants/routes';
import {Link} from 'react-router-dom';
import Dev from '../models/Dev';
import {WithFirebaseProps, withFirebase} from 'react-redux-firebase';
import User from '../models/User';
import IAlert, {formAlert} from '../types/Alert';
import Alert from '../components/Alert';
import useForm from '../hooks';

interface FormData {
  school: string;
  degree: string;
  from?: string;
  to?: string;
  current?: boolean;
  description?: string;
}

/**
 * Form to add an Education step to Profile
 */
const AddEducation: FC<WithFirebaseProps<User>> = ({firebase}) => {
  const [alert, setAlert] = useState<IAlert>(formAlert);

  const initFormData: FormData = {
    school: '',
    degree: '',
    from: '',
    to: '',
    current: false,
    description: '',
  };
  const {formData, handleChange, handleCheckboxesChange, resetForm} = useForm<
    FormData
  >(initFormData);

  const isDisabled: boolean = formData.school === '' || formData.degree === '';

  return (
    <section className="container">
      <FormHeader
        title="Add Your Education"
        lead="Add any school, bootcamp, etc that
        you have attended"
        icon="graduation-cap"
      />

      <form className="form">
        <div className="form-group">
          <input
            type="text"
            placeholder="* School or Bootcamp"
            name="schools"
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
          <input type="text" placeholder="Field Of Study" name="fieldofstudy" />
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
            />
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
        {alert.show && <Alert text={alert.text} color={alert.color} />}
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
    </section>
  );
};

export default withFirebase(AddEducation);

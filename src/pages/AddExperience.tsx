import React, {FC, useState, FormEvent} from 'react';
// Routing
import {Link} from 'react-router-dom';
import Routes from '../constants/routes';
// Redux
import {WithFirebaseProps} from 'react-redux-firebase';
import {enhance} from '../store/firebase';
// Style
import FormHeader from '../components/FormHeader';
import Alert from '../components/Alert';
// Typing
import Dev from '../models/Dev';
import User from '../models/User';
import IAlert, {formAlert} from '../types/Alert';
import Experience from '../types/Experience';
import {parseDate} from '../types/TimePeriod';
// Form
import useForm from '../hooks';

interface FormData {
  position: string;
  company: string;
  location: string;
  from: string;
  to: string;
  current: boolean;
  description: string;
}

interface IProps extends Dev, WithFirebaseProps<User> {}

/**
 * Form to add an Experience step to Profile
 */
const AddExperience: FC<IProps> = ({firebase, experiences}) => {
  const [alert, setAlert] = useState<IAlert>(formAlert);

  const initFormData: FormData = {
    position: '',
    company: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
  };
  const {formData, handleChange, handleCheckboxesChange, resetForm} = useForm<
    FormData
  >(initFormData);

  const isDisabled: boolean =
    formData.position === '' || formData.company === '';

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const makeExperience = ({
      position,
      company,
      from,
      location,
      to,
      current,
      description,
    }: FormData): Experience => {
      if (current) to = 'Current';
      const newExp: Experience = {
        id: experiences.length,
        position,
        company,
        location,
        from: parseDate(from),
        to: parseDate(to),
        description,
      };
      return newExp;
    };
    const newExp = makeExperience(formData);

    try {
      firebase.updateProfile(
        {experiences: [...experiences, newExp]},
        {useSet: true, merge: true},
      );
      setAlert({
        show: true,
        color: 'success',
        text:
          'Profile successfully updated. You may continue or go back to your dashboard.',
      });
      resetForm();
    } catch (err) {
      setAlert({...alert, show: true});
    }
  };

  return (
    <section className="container">
      <FormHeader
        title="Add An Experience"
        lead="Add any developer/programming
        positions that you have had in the past"
        icon="code-branch"
      />

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

export default enhance(AddExperience);

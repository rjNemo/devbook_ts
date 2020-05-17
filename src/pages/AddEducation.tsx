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
import Education from '../types/Education';
import {parseDate} from '../types/TimePeriod';
// Form
import useForm from '../hooks';

interface FormData {
  school: string;
  degree: string;
  field: string;
  from: string;
  to: string;
  current: boolean;
  description: string;
}

interface IProps extends Dev, WithFirebaseProps<User> {}
/**
 * Form to add an Education step to Profile
 */
const AddEducation: FC<IProps> = ({firebase, educations}) => {
  const [alert, setAlert] = useState<IAlert>(formAlert);

  const initFormData: FormData = {
    school: '',
    degree: '',
    field: '',
    from: '',
    to: '',
    current: false,
    description: '',
  };
  const {formData, handleChange, handleCheckboxesChange, resetForm} = useForm<
    FormData
  >(initFormData);

  const isDisabled: boolean = formData.school === '' || formData.degree === '';

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const makeEducation = ({
      school,
      degree,
      from,
      field,
      to,
      current,
      description,
    }: FormData): Education => {
      if (current) to = 'Current';
      const newEdu: Education = {
        id: educations.length,
        school,
        degree,
        field,
        from: parseDate(from),
        to: parseDate(to),
        description,
      };
      return newEdu;
    };
    const newEdu = makeEducation(formData);

    try {
      firebase.updateProfile(
        {educations: [...educations, newEdu]},
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
        title="Add Your Education"
        lead="Add any school, bootcamp, etc that
        you have attended"
        icon="graduation-cap"
      />

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

export default enhance(AddEducation);

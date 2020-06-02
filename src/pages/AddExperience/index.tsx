import React, {FC, useState, FormEvent} from 'react';
// Redux
import {WithFirebaseProps} from 'react-redux-firebase';
import {enhance} from '../../store/firebase';
// Style
import FormHeader from '../../components/FormHeader';
import Alert from '../../components/Alert';
// Typing
import Dev from '../../models/Dev';
import User from '../../models/User';
import IAlert, {formAlert} from '../../types/Alert';
import Experience from '../../types/Experience';
import {parseDate} from '../../types/TimePeriod';
// Form
import useForm from '../../hooks';
import AddExperienceForm from './Form';

export interface IExperienceForm {
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

  const initFormData: IExperienceForm = {
    position: '',
    company: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
  };
  const {formData, handleChange, handleCheckboxesChange, resetForm} = useForm<
    IExperienceForm
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
    }: IExperienceForm): Experience => {
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

      {alert.show && <Alert text={alert.text} color={alert.color} />}
      <AddExperienceForm
        formData={formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleCheckboxesChange={handleCheckboxesChange}
        isDisabled={isDisabled}
      />
    </section>
  );
};

export default enhance(AddExperience);

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
import Education from '../../types/Education';
import {parseDate} from '../../types/TimePeriod';
// Form
import useForm from '../../hooks';
import AddEducationForm from './Form';

export interface IEducationForm {
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

  const initFormData: IEducationForm = {
    school: '',
    degree: '',
    field: '',
    from: '',
    to: '',
    current: false,
    description: '',
  };
  const {formData, handleChange, handleCheckboxesChange, resetForm} = useForm<
    IEducationForm
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
    }: IEducationForm): Education => {
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
        lead="Add any school, bootcamp, etc. that
        you have attended"
        icon="graduation-cap"
      />

      {alert.show && <Alert text={alert.text} color={alert.color} />}
      <AddEducationForm
        formData={formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleCheckboxesChange={handleCheckboxesChange}
        isDisabled={isDisabled}
      />
    </section>
  );
};

export default enhance(AddEducation);

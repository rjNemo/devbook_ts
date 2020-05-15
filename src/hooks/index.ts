import {useState, ChangeEvent} from 'react';

/**
 * provide onChange handler and reset function
 * T is the initFormData object type
 *
 * @param initFormData initial state of the form
 * @returns formData object,
 * @returns handleChange function to pass to input tag
 * @returns resetForm function to revert to initFormData
 * */
const useForm = <T>(initFormData: T) => {
  const [formData, setFormData] = useState<T>(initFormData);

  /** update each input state value onChange */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ): void =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  /** clean form after successful submition */
  const resetForm = () => setFormData(initFormData);

  // /** update checkboxes TODO: do it better ...*/
  const handleCheckboxesChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setFormData({...formData, [e.target.name]: e.target.checked});

  return {formData, handleChange, handleCheckboxesChange, resetForm};
};

export default useForm;

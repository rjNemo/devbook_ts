import React, {FC, useState} from 'react';
// Redux
import {enhance} from '../../store/firebase';
import {WithFirebaseProps} from 'react-redux-firebase';
// Style
import FormHeader from '../../components/FormHeader';
import Alert from '../../components/Alert';
// Form
import useForm from '../../hooks';
import getGithubRepos from '../../services/github';
// Typing
import Dev from '../../models/Dev';
import User from '../../models/User';
import Links, {parseLink, getGithubLink} from '../../types/Links';
import IAlert, {formAlert} from '../../types/Alert';
import EditProfileForm from './Form';

export interface IProfileForm {
  status: string;
  company: string;
  website: string;
  location: string;
  skills: string;
  github: string;
  bio: string;
  facebook: string;
  linkedin: string;
  instagram: string;
  twitter: string;
  youtube: string;
}

interface IProps extends Dev, WithFirebaseProps<User> {}

/**
 * Form to update dev's personal information.
 */
const EditProfile: FC<IProps> = ({
  firebase,
  status,
  skills,
  company,
  links,
  location,
  bio,
  github,
}) => {
  const [showLinks, setShowLinks] = useState(false);
  const [alert, setAlert] = useState<IAlert>(formAlert);

  const initFormData = {
    status: status ?? 'Developer',
    company: company,
    location: location ?? '',
    bio: bio ?? '',
    skills: skills?.toString() ?? '',
    website: links?.website ?? '',
    github: github ?? '',
    facebook: links?.facebook ?? '',
    linkedin: links?.linkedin ?? '',
    instagram: links?.instagram ?? '',
    twitter: links?.twitter ?? '',
    youtube: links?.youtube ?? '',
  };

  const {formData, handleChange} = useForm<IProfileForm>(initFormData);

  /** construct profile object from formData */
  const makeProfile = async ({
    status,
    company,
    location,
    bio,
    website,
    instagram,
    facebook,
    linkedin,
    twitter,
    github,
    youtube,
    skills,
  }: IProfileForm) => {
    const newLinks: Links = {
      website: parseLink(website),
      instagram: parseLink(instagram),
      facebook: parseLink(facebook),
      linkedin: parseLink(linkedin),
      twitter: parseLink(twitter),
      github: getGithubLink(github),
      youtube: parseLink(youtube),
    };
    const newSkills: string[] = skills?.split(',');
    const newRepos = await getGithubRepos(github);
    return {
      status,
      company,
      location,
      bio,
      github,
      links: newLinks,
      skills: newSkills,
      repos: newRepos,
    };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedDev = await makeProfile(formData);
    try {
      firebase.updateProfile(updatedDev, {useSet: true, merge: true});
      setAlert({
        show: true,
        color: 'success',
        text:
          'Profile successfully updated. You may go back to your dashboard.',
      });
    } catch (err) {
      console.error(err);
      setAlert({...alert, show: true});
    }
  };

  const isDisabled: boolean = formData.status === '' || formData.skills === '';

  const toggleSocialLinks = () => setShowLinks(!showLinks);

  return (
    <section className="container">
      <FormHeader
        title="Edit your profile"
        lead="Let's get some information to make your profile stand out"
      />

      {alert.show && <Alert text={alert.text} color={alert.color} />}
      <EditProfileForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isDisabled={isDisabled}
        toggleSocialLinks={toggleSocialLinks}
        showLinks={showLinks}
      />
    </section>
  );
};

export default enhance(EditProfile);

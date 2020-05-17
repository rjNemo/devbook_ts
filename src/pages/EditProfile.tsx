import React, {FC, useState} from 'react';
import {Link} from 'react-router-dom';
import Routes from '../constants/routes';
// Redux
import {enhance} from '../store/firebase';
import {WithFirebaseProps} from 'react-redux-firebase';
// Style
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import FormHeader from '../components/FormHeader';
import Alert from '../components/Alert';
import Statuses from '../constants/statuses';
// Form
import useForm from '../hooks';
// Typing
import Dev from '../models/Dev';
import User from '../models/User';
import Links from '../types/Links';
import IAlert, {formAlert} from '../types/Alert';

interface FormData {
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
    github: links?.github ?? '',
    facebook: links?.facebook ?? '',
    linkedin: links?.linkedin ?? '',
    instagram: links?.instagram ?? '',
    twitter: links?.twitter ?? '',
    youtube: links?.youtube ?? '',
  };

  const {formData, handleChange} = useForm<FormData>(initFormData);

  /** construct profile object from formData */
  const makeProfile = ({
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
  }: FormData) => {
    const newLinks: Links = {
      website,
      instagram,
      facebook,
      linkedin,
      twitter,
      github,
      youtube,
    };
    const newSkills: string[] = skills?.split(',');
    return {
      status,
      company,
      location,
      bio,
      links: newLinks,
      skills: newSkills,
    };
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const updatedDev = makeProfile(formData);
    try {
      firebase.updateProfile(updatedDev, {useSet: true, merge: true});
      setAlert({
        show: true,
        color: 'success',
        text:
          'Profile successfully updated. You may go back to your dashboard.',
      });
    } catch (err) {
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

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <select
            name="status"
            required
            onChange={handleChange}
            defaultValue={formData.status}
          >
            <option disabled>* Select Professional Status</option>
            {Statuses.map((s: string, i: number) => (
              <option value={s} key={i}>
                {s}
              </option>
            ))}
          </select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={formData.company}
            // value={variable}
            onChange={handleChange}
          />
          <small className="form-text">
            Could be your own company or one you work for
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
          <small className="form-text">
            Could be your own or a company website
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          <small className="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="* Skills"
            name="skills"
            required
            value={formData.skills}
            onChange={handleChange}
          />
          <small className="form-text">
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="github"
            value={formData.github}
            onChange={handleChange}
          />
          <small className="form-text">
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>
        <div className="form-group">
          <textarea
            placeholder="A short bio of yourself"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          ></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button
            type="button"
            className="btn btn-light"
            onClick={toggleSocialLinks}
          >
            {showLinks ? 'Hide' : 'Add'} Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {showLinks && (
          <>
            <div className="form-group social-input">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
              />
            </div>

            <div className="form-group social-input">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
              />
            </div>

            <div className="form-group social-input">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>

            <div className="form-group social-input">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
              />
            </div>

            <div className="form-group social-input">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={formData.youtube}
                onChange={handleChange}
              />
            </div>
          </>
        )}
        {alert.show && <Alert text={alert.text} color={alert.color} />}
        <input
          type="submit"
          className="btn btn-primary my-1"
          value="Submit"
          disabled={isDisabled}
        />
        <Link to={Routes.DASHBOARD} className="btn btn-light my-1">
          Go Back
        </Link>
      </form>
    </section>
  );
};

export default enhance(EditProfile);

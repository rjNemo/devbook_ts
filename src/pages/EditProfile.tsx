import React, {FC, useState} from 'react';
import {Link} from 'react-router-dom';
import Routes from '../constants/routes';
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
import Statuses from '../constants/statuses';
// Form
import useForm from '../hooks';

interface InitFormData {
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
/**
 * Form to update dev's personal information.
 */
const EditProfile: FC = () => {
  const [showLinks, setShowLinks] = useState(false);
  const initFormData = {
    status: '',
    company: '',
    website: '',
    location: '',
    skills: '',
    github: '',
    bio: '',
    facebook: '',
    linkedin: '',
    instagram: '',
    twitter: '',
    youtube: '',
  };
  const {formData, handleChange, resetForm} = useForm<InitFormData>(
    initFormData,
  );

  const {
    status,
    company,
    website,
    location,
    skills,
    github,
    bio,
    facebook,
    linkedin,
    instagram,
    twitter,
    youtube,
  } = formData;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Submitted');
  };

  const revealSocialLinks = () => setShowLinks(true);
  return (
    <section className="container">
      <FormHeader
        title="Create your profile"
        lead="Let's get some information to make your profile stand out"
      />

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <select name="status" required autoFocus onChange={handleChange}>
            <option value="0">* Select Professional Status</option>
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
            value={company}
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
            value={website}
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
            value={location}
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
            value={skills}
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
            value={github}
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
            value={bio}
            onChange={handleChange}
          ></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button
            type="button"
            className="btn btn-light"
            onClick={revealSocialLinks}
          >
            Add Social Network Links
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
                value={facebook}
                onChange={handleChange}
              />
            </div>

            <div className="form-group social-input">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={handleChange}
              />
            </div>

            <div className="form-group social-input">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={handleChange}
              />
            </div>

            <div className="form-group social-input">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={handleChange}
              />
            </div>

            <div className="form-group social-input">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={handleChange}
              />
            </div>
          </>
        )}

        <input type="submit" className="btn btn-primary my-1" value="Submit" />
        <Link to={Routes.DASHBOARD} className="btn btn-light my-1">
          Go Back
        </Link>
      </form>
    </section>
  );
};

export default EditProfile;

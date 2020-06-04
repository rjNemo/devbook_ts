import React, {FC} from 'react';
// Routing
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {IProfileForm} from '.';

import Routes from '../../constants/routes';
import Statuses from '../../constants/statuses';

interface IProps {
  showLinks: boolean;
  isDisabled: boolean;
  formData: IProfileForm;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  toggleSocialLinks: () => void;
}

const EditProfileForm: FC<IProps> = ({
  showLinks,
  handleSubmit,
  formData,
  handleChange,
  isDisabled,
  toggleSocialLinks,
}) => (
  <form className="form" onSubmit={handleSubmit} autoComplete="on">
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
        onChange={handleChange}
      />
      <small className="form-text">
        Could be your own company or one you work for
      </small>
    </div>
    <div className="form-group">
      <input
        type="url"
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
        If you want your latest repos and a Github link, include your username
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
            type="url"
            placeholder="Facebook URL"
            name="facebook"
            value={formData.facebook}
            onChange={handleChange}
          />
        </div>

        <div className="form-group social-input">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <input
            type="url"
            placeholder="Instagram URL"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
          />
        </div>

        <div className="form-group social-input">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          <input
            type="url"
            placeholder="Linkedin URL"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
          />
        </div>

        <div className="form-group social-input">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          <input
            type="url"
            placeholder="Twitter URL"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
          />
        </div>

        <div className="form-group social-input">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
          <input
            type="url"
            placeholder="YouTube URL"
            name="youtube"
            value={formData.youtube}
            onChange={handleChange}
          />
        </div>
      </>
    )}

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
);

export default EditProfileForm;

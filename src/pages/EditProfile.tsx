import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import FormHeader from '../components/FormHeader';

const EditProfile: FC = () => {
  return (
    <section className="container">
      <FormHeader
        title="Create your profile"
        lead="Let's get some information to make your profile stand out"
      />

      <form className="form">
        <div className="form-group">
          <select name="status" required>
            <option value="0">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text">
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Company" name="company" />
          <small className="form-text">
            Could be your own company or one you work for
          </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Website" name="website" />
          <small className="form-text">
            Could be your own or a company website
          </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" />
          <small className="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Skills" name="skills" required />
          <small className="form-text">
            Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
          />
          <small className="form-text">
            If you want your latest repos and a Github link, include your
            username
          </small>
        </div>
        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio"></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        <div className="my-2">
          <button type="button" className="btn btn-light">
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        <div className="form-group social-input">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          <input type="text" placeholder="Facebook URL" name="facebook" />
        </div>

        <div className="form-group social-input">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <input type="text" placeholder="Instagram URL" name="instagram" />
        </div>

        <div className="form-group social-input">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          <input type="text" placeholder="Linkedin URL" name="linkedin" />
        </div>

        <div className="form-group social-input">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          <input type="text" placeholder="Twitter URL" name="twitter" />
        </div>

        <div className="form-group social-input">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
          <input type="text" placeholder="YouTube URL" name="youtube" />
        </div>

        <input type="submit" className="btn btn-primary my-1" value="Submit" />
        <a className="btn btn-light my-1" href="dashboard.html">
          Go Back
        </a>
      </form>
    </section>
  );
};

export default EditProfile;

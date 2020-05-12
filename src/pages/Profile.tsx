import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faGlobe,
  IconDefinition,
  faCheck,
  faStar,
  faEye,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';
import Dev, {dummyDev as dev} from '../models/Dev';
import Experience from '../types/Experience';
import {getTimePeriod} from '../types/TimePeriod';
import Education from '../types/Education';
import Repo from '../types/Repo';

/**
 * Dev personal profile as seen by other people.
 */
const Profile: FC<Dev> = () => {
  /** return the icon corresponding to the social name */
  const renderSocialIcon = (name: string): IconDefinition => {
    switch (name) {
      case 'facebook':
        return faFacebook;
      case 'github':
        return faGithub;
      case 'instagram':
        return faInstagram;
      case 'linkedin':
        return faLinkedin;
      case 'twitter':
        return faTwitter;
      default:
        return faGlobe;
    }
  };

  return (
    <section className="container">
      <a href="profiles.html" className="btn">
        Back to profiles
      </a>

      <div className="profile-grid my-1">
        <div className="profile-top bg-primary p-2">
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt="Some guy"
            className="round-img my-1"
          />
          <h1 className="large">{dev.name}</h1>
          <p className="lead">{dev.description}</p>
          <p>{dev.location}</p>
          <div className="icons my-1">
            {Object.entries(dev.links).map(([icon, webAddress], i: number) => (
              <a href={webAddress} key={i}>
                <FontAwesomeIcon icon={renderSocialIcon(icon)} size="2x" />
              </a>
            ))}
          </div>
        </div>

        <div className="profile-about bg-light p-2">
          <h2 className="text-primary">{`${dev.name}'s Bio`}</h2>
          <p>{dev.bio}</p>
          <div className="line"></div>
          <h2 className="text-primary">Skill Set</h2>
          <div className="skills">
            {dev.skills.map((s: string, i: number) => (
              <div className="p-1" key={i}>
                <FontAwesomeIcon icon={faCheck} /> {s}
              </div>
            ))}
          </div>
        </div>

        <div className="profile-exp bg-white p-2">
          <h2 className="text-primary">Experiences</h2>
          {dev.experiences.map((exp: Experience, i: number) => (
            <div key={i}>
              <h3>{exp.company}</h3>
              <p>{getTimePeriod(exp.from, exp.to)}</p>
              <p>
                <strong>Position: </strong>
                {exp.position}
              </p>
              <p>
                <strong>Description: </strong>
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        <div className="profile-edu bg-white p-2">
          <h2 className="text-primary">Education</h2>
          {dev.educations.map((edu: Education, i: number) => (
            <div key={i}>
              <h3>{edu.school}</h3>
              <p>{getTimePeriod(edu.from, edu.to)}</p>
              <p>
                <strong>Degree: </strong>
                {edu.degree}
              </p>
              <p>
                <strong>Field: </strong>
                {edu.field}
              </p>
              <p>
                <strong>Description: </strong>
                {edu.description}
              </p>
            </div>
          ))}
        </div>

        <div className="profile-github">
          <h2 className="text-primary my-1">
            <FontAwesomeIcon icon={faGithub} /> GitHub Repos
          </h2>

          {dev.repos.map((r: Repo, i: number) => (
            <div className="repo bg-white my-1 p-1">
              <div>
                <h4>
                  <a href={r.link}>{r.name}</a>
                </h4>
                <p>{r.description}</p>
              </div>
              <div>
                <ul>
                  <li className="badge badge-primary">
                    <FontAwesomeIcon icon={faStar} /> Stars: 42
                  </li>
                  <li className="badge badge-dark">
                    <FontAwesomeIcon icon={faEye} /> Watchers: 2
                  </li>
                  <li className="badge badge-light">
                    <FontAwesomeIcon icon={faCodeBranch} /> Forks: 4
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;

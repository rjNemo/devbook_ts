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
} from '@fortawesome/free-solid-svg-icons';
import DevFull from '../models/DevFull';
import Experience from '../models/Experience';
import {parseDate} from '../types';
import Education from '../models/Education';

const Profile: FC<DevFull> = () => {
  const dev: DevFull = {
    id: '0',
    name: 'John Doe',
    picture:
      'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    description: 'Developer at Microsoft',
    location: 'Seattle, WA',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    links: {
      web: '#',
      instagram: 'http://insta.com',
      facebook: '#',
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
    bio:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis unde quae vero enim adipisci voluptas magni sapiente reprehenderit error minima.',
    experiences: [
      {
        employer: 'Microsoft',
        from: new Date(2011, 10),
        to: 'Current',
        position: 'Senior Developer',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas corrupti rem eius, accusantium ipsum vel eveniet magnam voluptatum? Minus, voluptatum!',
      },
      {
        employer: 'Sun Microsystems',
        from: new Date(2004, 10),
        to: new Date(2010, 11),
        position: 'System Admin',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus at rem totam sed qui! Quas.',
      },
    ],
    educations: [
      {
        school: 'University of Washington',
        from: new Date(1993, 9),
        to: new Date(1999, 6),
        degree: 'Master',
        field: 'Computer Science',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus at rem totam sed qui! Quas.',
      },
    ],
    repos: [],
  };

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
              <h3>{exp.employer}</h3>
              <p>{`${parseDate(exp.from)} - ${parseDate(exp.to)}`}</p>
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
              <p>{`${parseDate(edu.from)} - ${parseDate(edu.to)}`}</p>
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
            <i className="fa fa-github"></i>
            GitHub Repos
          </h2>

          <div className="repo bg-white my-1 p-1">
            <div>
              <h4>
                <a href="">Repo #1</a>
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                deserunt.
              </p>
            </div>
            <div>
              <ul>
                <li className="badge badge-primary">
                  <i className="fa fa-star"></i> Stars: 42
                </li>
                <li className="badge badge-dark">
                  <i className="fa fa-eye"></i> Watchers: 2
                </li>
                <li className="badge badge-light">
                  <i className="fa fa-code-fork"></i> Forks: 4
                </li>
              </ul>
            </div>
          </div>
          <div className="repo bg-white my-1 p-1">
            <div>
              <h4>
                <a href="">Repo #2</a>
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                deserunt.
              </p>
            </div>
            <div>
              <ul>
                <li className="badge badge-primary">
                  <i className="fa fa-star"></i> Stars: 42
                </li>
                <li className="badge badge-dark">
                  <i className="fa fa-eye"></i> Watchers: 2
                </li>
                <li className="badge badge-light">
                  <i className="fa fa-code-fork"></i> Forks: 4
                </li>
              </ul>
            </div>
          </div>
          <div className="repo bg-white my-1 p-1">
            <div>
              <h4>
                <a href="">Repo #3</a>
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
                deserunt.
              </p>
            </div>
            <div>
              <ul>
                <li className="badge badge-primary">
                  <i className="fa fa-star"></i> Stars: 42
                </li>
                <li className="badge badge-dark">
                  <i className="fa fa-eye"></i> Watchers: 2
                </li>
                <li className="badge badge-light">
                  <i className="fa fa-code-fork"></i> Forks: 4
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

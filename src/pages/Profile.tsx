import React, {FC} from 'react';
// Redux
import {compose} from '@reduxjs/toolkit';
import {firestoreConnect} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {RootState} from '../store';
// Routing
import {Link, useParams} from 'react-router-dom';
import Routes from '../constants/routes';
import NotFound from './NotFound';
// Style
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faGlobe,
  IconDefinition,
  faCheck,
  faStar,
  faEye,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';
// Typing
import IDev, {getDescription} from '../models/Dev';
import Experience from '../types/Experience';
import {getTimePeriod} from '../types/TimePeriod';
import Education from '../types/Education';
import Repo from '../types/Repo';

interface IProps {
  dev: IDev;
}

/**
 * Dev personal profile as seen by other people.
 */
const Profile: FC<IProps> = ({dev}) => {
  // display 404 page if dev is null
  if (dev === null) {
    return <NotFound />;
  }

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
      case 'youtube':
        return faYoutube;
      default:
        return faGlobe;
    }
  };

  return dev === undefined ? (
    <div>Loading ... </div>
  ) : (
    <section className="container">
      <Link to={Routes.DEVELOPERS} className="btn">
        Back to profiles
      </Link>

      <div className="profile-grid my-1">
        <div className="profile-top bg-primary p-2">
          <img
            src={dev.avatarUrl}
            alt={dev.displayName}
            className="round-img my-1"
          />
          <h1 className="large">{dev.displayName}</h1>
          <p className="lead">{getDescription(dev.status, dev.company)}</p>
          <p>{dev.location}</p>
          <div className="icons my-1">
            {Object.entries(dev.links)
              .sort()
              .map(([icon, webAddress], i: number) => (
                <a
                  href={webAddress}
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={renderSocialIcon(icon)} size="2x" />
                </a>
              ))}
          </div>
        </div>

        <div className="profile-about bg-light p-2">
          <h2 className="text-primary">{`${dev.displayName}'s Bio`}</h2>
          <p>
            {dev.bio.length === 0
              ? 'Add a short bio to present yourself!'
              : dev.bio}
          </p>
          <div className="line"></div>
          <h2 className="text-primary">Skill Set</h2>
          <div className="skills">
            {dev.skills.length === 0
              ? 'Let us know about your skills!'
              : dev.skills?.map((s: string, i: number) => (
                  <div className="p-1" key={i}>
                    <FontAwesomeIcon icon={faCheck} /> {s}
                  </div>
                ))}
          </div>
        </div>

        <div className="profile-exp bg-white p-2">
          <h2 className="text-primary">Experiences</h2>
          {dev.experiences.length === 0 ? (
            <div>
              <img
                src={require('../static/img/404.jpg')}
                alt="no experiences"
              />
            </div>
          ) : (
            dev.experiences.map((exp: Experience, i: number) => (
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
            ))
          )}
        </div>

        <div className="profile-edu bg-white p-2">
          <h2 className="text-primary">Education</h2>
          {dev.educations.length === 0 ? (
            <div>
              <img src={require('../static/img/404.jpg')} alt="no educations" />
            </div>
          ) : (
            dev.educations.map((edu: Education, i: number) => (
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
            ))
          )}
        </div>

        <div className="profile-github">
          <h2 className="text-primary my-1">
            <FontAwesomeIcon icon={faGithub} /> GitHub Repos
          </h2>

          {dev.repos?.length === 0 ? (
            <div>
              <img
                src={require('../static/img/404.jpg')}
                alt="no repositories"
              />
            </div>
          ) : (
            dev.repos.map((r: Repo, i: number) => (
              <div className="repo bg-white my-1 p-1" key={i}>
                <div>
                  <h4>
                    <a href={r.url}>{r.name}</a>
                  </h4>
                  <p>{r.description}</p>
                </div>
                <div>
                  <ul>
                    <li className="badge badge-primary">
                      <FontAwesomeIcon icon={faStar} /> Stars: {r.stars}
                    </li>
                    <li className="badge badge-dark">
                      <FontAwesomeIcon icon={faEye} /> Watchers: {r.watchers}
                    </li>
                    <li className="badge badge-light">
                      <FontAwesomeIcon icon={faCodeBranch} /> Forks: {r.forks}
                    </li>
                  </ul>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

/**
 * Container to fetch id params from thr URI and pass it to Profile page
 */
const ProfileContainer: FC = () => {
  const {id} = useParams();

  const Component = compose<FC>(
    firestoreConnect(() => [`users/${id}`]),
    connect(({firestore: {data}}: RootState) => ({
      dev: data.users && data.users[id],
    })),
  )(Profile);

  return <Component />;
};

export default ProfileContainer;

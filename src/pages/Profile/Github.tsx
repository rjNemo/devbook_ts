import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faStar, faEye, faCodeBranch} from '@fortawesome/free-solid-svg-icons';

import Repo from '../../types/Repo';

import githubPicture from '../../static/img/github.svg';

const ProfileGithub: FC<{repos: Repo[]}> = ({repos}) => (
  <div className="profile-github">
    <h2 className="text-primary my-1">
      <FontAwesomeIcon icon={faGithub} /> GitHub Repos
    </h2>

    {repos?.length === 0 ? (
      <div>
        <img src={githubPicture} alt="no repositories" />
      </div>
    ) : (
      repos.map((r: Repo, i: number) => (
        <div className="repo bg-white my-1 p-1" key={i}>
          <div>
            <h4>
              <a href={r.url} target="_blank" rel="noopener noreferrer">
                {r.name}
              </a>
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
);

export default React.memo(ProfileGithub);

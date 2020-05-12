import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

interface IProps {
  name: string;
  description: string;
  location: string;
  skills: string[];
}

const DevProfile: FC<IProps> = ({name, description, location, skills}) => (
  <div className="profile bg-light">
    <img
      src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
      alt="Some guy"
      className="round-img"
    />
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{location}</p>
      <a href="profile.html" className="btn btn-primary">
        View Profile
      </a>
    </div>
    <ul>
      {skills.map((s, i) => (
        <li className="text-primary">
          <FontAwesomeIcon icon={faCheck} /> {s}
        </li>
      ))}
    </ul>
  </div>
);

export default DevProfile;

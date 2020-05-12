import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import DevSummary from '../models/DevSummary';

const DevProfile: FC<DevSummary> = ({
  id,
  name,
  picture,
  description,
  location,
  skills,
}) => (
  <div className="profile bg-light">
    <img src={picture} alt={name} className="round-img" />
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
        <li className="text-primary" key={i}>
          <FontAwesomeIcon icon={faCheck} /> {s}
        </li>
      ))}
    </ul>
  </div>
);

export default DevProfile;

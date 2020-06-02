import React, {FC} from 'react';
// Routing
import {Link} from 'react-router-dom';
// Style
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
// Typing
import {DevSummary, getDescription} from '../../models/Dev';
import Routes from '../../constants/routes';

/**
 * Present a dev profile succintly. Redirect to dev profile on click.
 * @param props DevSummary object
 */
const DevProfile: FC<DevSummary> = ({
  id,
  displayName,
  avatarUrl,
  status,
  company,
  location,
  skills,
}) => (
  <div className="profile bg-light">
    <img src={avatarUrl} alt={displayName} className="round-img" />
    <div>
      <h2>{displayName}</h2>
      <p>{getDescription(status, company)}</p>
      <p>{location}</p>
      <Link to={`${Routes.PROFILE}/${id}`} className="btn btn-primary">
        View Profile
      </Link>
    </div>
    <ul>
      {skills?.map((s, i) => (
        <li className="text-primary" key={i}>
          <FontAwesomeIcon icon={faCheck} /> {s}
        </li>
      ))}
    </ul>
  </div>
);

export default React.memo(DevProfile);

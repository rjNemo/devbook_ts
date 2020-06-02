import React, {FC} from 'react';
// Styling
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

import IDev from '../../models/Dev';

const ProfileAbout: FC<IDev> = ({displayName, bio, skills}) => (
  <div className="profile-about bg-light p-2">
    <h2 className="text-primary">{`${displayName}'s Bio`}</h2>
    <p>{bio.length === 0 ? 'Add a short bio to present yourself!' : bio}</p>
    <div className="line"></div>
    <h2 className="text-primary">Skill Set</h2>
    <div className="skills">
      {skills.length === 0
        ? 'Let us know about your skills!'
        : skills?.map((s: string, i: number) => (
            <div className="p-1" key={i}>
              <FontAwesomeIcon icon={faCheck} /> {s}
            </div>
          ))}
    </div>
  </div>
);

export default React.memo(ProfileAbout);

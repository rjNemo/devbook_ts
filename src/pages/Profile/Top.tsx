import React, {FC} from 'react';
// Styling
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';

import IDev, {getDescription} from '../../models/Dev';

const ProfileTop: FC<IDev> = ({
  avatarUrl,
  displayName,
  status,
  company,
  links,
  location,
}) => {
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
  return (
    <div className="profile-top bg-primary p-2">
      <img src={avatarUrl} alt={displayName} className="round-img my-1" />
      <h1 className="large">{displayName}</h1>
      <p className="lead">{getDescription(status, company)}</p>
      <p>{location}</p>
      <div className="icons my-1">
        {Object.entries(links)
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
  );
};

export default React.memo(ProfileTop);

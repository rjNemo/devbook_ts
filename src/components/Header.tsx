import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCodeBranch,
  faGraduationCap,
  faExclamation,
  faExclamationCircle,
  faExclamationTriangle,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import {faConnectdevelop} from '@fortawesome/free-brands-svg-icons';

interface IProps {
  title: string;
  lead: string;
  icon?: string;
}

/**
 * Header component
 * @param title of the page
 * @param lead description of the content
 * @param icon  to display (optional and default to faUser)
 */
const Header: FC<IProps> = ({title, lead, icon = 'faUser'}) => {
  const RenderIcon = (icon: string) => {
    if (icon === 'faUser') {
      return <FontAwesomeIcon icon={faUser} />;
    }
    if (icon === 'connectdevelop') {
      return <FontAwesomeIcon icon={faConnectdevelop} />;
    }
    if (icon === 'code-branch') {
      return <FontAwesomeIcon icon={faCodeBranch} />;
    }
    if (icon === 'code') {
      return null;
    }
    if (icon === 'graduation-cap') {
      return <FontAwesomeIcon icon={faGraduationCap} />;
    }
    if (icon === 'not-found') {
      return <FontAwesomeIcon icon={faExclamationTriangle} />;
    }
  };

  return (
    <>
      <h1 className="large text-primary">{title}</h1>
      <p className="lead">
        {RenderIcon(icon)} {lead}
      </p>
    </>
  );
};

export default Header;

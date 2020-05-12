import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faConnectdevelop} from '@fortawesome/free-brands-svg-icons';

interface IProps {
  title: string;
  lead: string;
  icon?: string;
}

const Header: FC<IProps> = ({title, lead, icon = 'faUser'}) => {
  const RenderIcon = (icon: string) => {
    if (icon === 'faUser') {
      return <FontAwesomeIcon icon={faUser} />;
    }
    if (icon === 'connectdevelop') {
      return <FontAwesomeIcon icon={faConnectdevelop} />;
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

import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

interface IProps {
  text: string;
  color?: string;
}

const Alert: FC<IProps> = ({text, color = 'danger'}) => (
  <div className={`alert alert-${color}`}>
    <FontAwesomeIcon icon={faExclamationTriangle} /> {text}
  </div>
);

export default Alert;

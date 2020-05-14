import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

interface IProps {
  text: string;
}

const Alert: FC<IProps> = ({text}) => (
  <div className="alert alert-danger">
    <FontAwesomeIcon icon={faExclamationTriangle} /> {text}
  </div>
);

export default Alert;

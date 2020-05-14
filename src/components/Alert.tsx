import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

const Alert: FC = () => (
  <div className="alert alert-danger">
    <FontAwesomeIcon icon={faExclamationTriangle} /> Passwords don't match!
  </div>
);

export default Alert;

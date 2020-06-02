import React from 'react';
// Routing
import {Link} from 'react-router-dom';
import Routes from '../../constants/routes';
// Styling
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCircle, faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import {faBlackTie} from '@fortawesome/free-brands-svg-icons';

const DashBoardButtons = () => (
  <div className="dash-buttons">
    <Link to={Routes.EDIT_PROFILE} className="btn btn-light">
      <FontAwesomeIcon icon={faUserCircle} /> Edit Profile
    </Link>
    <Link to={Routes.ADD_EXPERIENCE} className="btn btn-light">
      <FontAwesomeIcon icon={faBlackTie} /> Add Experience
    </Link>
    <Link to={Routes.ADD_EDUCATION} className="btn btn-light">
      <FontAwesomeIcon icon={faGraduationCap} /> Add Education
    </Link>
  </div>
);

export default DashBoardButtons;

import React, {FC} from 'react';

import Education from '../../types/Education';
import {getTimePeriod} from '../../types/TimePeriod';

import educationPicture from '../../static/img/education.svg';

const ProfileEducation: FC<{educations: Education[]}> = ({educations}) => (
  <div className="profile-edu bg-white p-2">
    <h2 className="text-primary">Education</h2>
    {educations.length === 0 ? (
      <div>
        <img src={educationPicture} alt="no educations" />
      </div>
    ) : (
      educations.map((edu: Education, i: number) => (
        <div key={i}>
          <h3>{edu.school}</h3>
          <p>{getTimePeriod(edu.from, edu.to)}</p>
          <p>
            <strong>Degree: </strong>
            {edu.degree}
          </p>
          <p>
            <strong>Field: </strong>
            {edu.field}
          </p>
          <p>
            <strong>Description: </strong>
            {edu.description}
          </p>
        </div>
      ))
    )}
  </div>
);

export default React.memo(ProfileEducation);

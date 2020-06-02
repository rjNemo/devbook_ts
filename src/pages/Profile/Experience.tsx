import React, {FC} from 'react';

import Experience from '../../types/Experience';
import {getTimePeriod} from '../../types/TimePeriod';

import expPicture from '../../static/img/experience.svg';

const ProfileExperience: FC<{experiences: Experience[]}> = ({experiences}) => (
  <div className="profile-exp bg-white p-2">
    <h2 className="text-primary">Experiences</h2>
    {experiences.length === 0 ? (
      <div>
        <img src={expPicture} alt="no experiences" />
      </div>
    ) : (
      experiences.map((exp: Experience, i: number) => (
        <div key={i}>
          <h3>{exp.company}</h3>
          <p>{getTimePeriod(exp.from, exp.to)}</p>
          <p>
            <strong>Position: </strong>
            {exp.position}
          </p>
          <p>
            <strong>Description: </strong>
            {exp.description}
          </p>
        </div>
      ))
    )}
  </div>
);

export default ProfileExperience;

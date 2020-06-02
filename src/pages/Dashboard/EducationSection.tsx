import React, {FC} from 'react';
// Typing
import Education from '../../types/Education';

import {getTimePeriod} from '../../types/TimePeriod';

interface IProps {
  educations: Education[];
  handleDelete: (
    id: number,
    entries: Education[],
  ) => (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const DashboardEducationSection: FC<IProps> = ({educations, handleDelete}) => {
  return (
    <>
      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {educations?.map((edu: Education, i: number) => (
            <tr key={edu.id}>
              <td>{edu.school}</td>
              <td className="hide-sm">{edu.degree}</td>
              <td className="hide-sm">{getTimePeriod(edu.from, edu.to)}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={handleDelete(edu.id, educations)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DashboardEducationSection;

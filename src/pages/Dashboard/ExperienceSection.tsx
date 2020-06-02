import React, {FC} from 'react';
// Typing
import Experience from '../../types/Experience';
import {getTimePeriod} from '../../types/TimePeriod';

interface IProps {
  experiences: Experience[];
  handleDelete: (
    id: number,
    entries: Experience[],
  ) => (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const DashboardExperienceSection: FC<IProps> = ({
  experiences,
  handleDelete,
}) => {
  return (
    <>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {experiences.map((exp: Experience) => (
            <tr key={exp.id}>
              <td>{exp.company}</td>
              <td className="hide-sm">{exp.position}</td>
              <td className="hide-sm">{getTimePeriod(exp.from, exp.to)}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={handleDelete(exp.id, experiences)}
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

export default DashboardExperienceSection;

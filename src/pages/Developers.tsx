import React, {FC} from 'react';
import Header from '../components/Header';
import DevProfile from '../components/DevProfile';
import {DevSummary} from '../models/Dev';

/**
 * Developers list page
 */
// const Developers: FC<DevSummary[]> = (developers) => {
const Developers: FC = () => {
  const developers: DevSummary[] = [
    {
      id: '0',
      name: 'John Doe',
      picture:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
      description: 'Developer at Microsoft',
      location: 'Seattle, WA',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    },
    {
      id: '42',
      name: 'Ruidy Nemausat',
      picture:
        'https://lh3.googleusercontent.com/a-/AOh14GhncH95MWKwPR3TRKy4eVd4n6w0-fobe4dhiam2xA',
      description: 'Fullstack Engineer at DESY',
      location: 'Hamburg, DE',
      skills: ['React', 'TypeScript', 'Redux', 'Nodejs'],
    },
  ];

  return (
    <section className="container">
      <Header
        title="Developers"
        lead="Browse and connect with developers"
        icon="connectdevelop"
      />
      <div className="profiles">
        {developers.map(dev => (
          // use spread operator to pass props
          <DevProfile key={dev.id} {...dev} />
        ))}
      </div>
    </section>
  );
};

export default Developers;

import React, {FC} from 'react';
import Header from '../components/Header';
import DevProfile from '../components/DevProfile';

// interface IProps {
//     developers: []
// }

// const Developers: FC<IProps> = ({developers}) => (
const Developers: FC = () => {
  const developers = [
    {
      name: 'John Doe',
      description: 'Developer at Microsoft',
      location: 'Seattle, WA',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
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
        {developers.map((dev, i) => (
          <DevProfile
            key={i}
            name={dev.name}
            description={dev.description}
            location={dev.location}
            skills={dev.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default Developers;

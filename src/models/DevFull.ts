import DevSummary from '../models/DevSummary';
import Experience from './Experience';
import Education from './Education';
import Repo from './Repo';

/**Full developer profile information. extends summary to avoid duplication */
interface DevFull extends DevSummary {
  bio: string;
  links: Object;
  experiences: Experience[];
  educations: Education[];
  repos: Repo[];
}

/**
 * sample DevFull for development and tests
 */
export const dummyDevFull: DevFull = {
  id: '0',
  name: 'John Doe',
  picture:
    'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
  description: 'Developer at Microsoft',
  location: 'Seattle, WA',
  skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
  links: {
    web: '#',
    instagram: 'http://insta.com',
    facebook: '#',
    linkedin: '#',
    twitter: '#',
    github: '#',
  },
  bio:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis unde quae vero enim adipisci voluptas magni sapiente reprehenderit error minima.',
  experiences: [
    {
      company: 'Microsoft',
      from: new Date(2011, 10),
      to: 'Current',
      position: 'Senior Developer',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas corrupti rem eius, accusantium ipsum vel eveniet magnam voluptatum? Minus, voluptatum!',
    },
    {
      company: 'Sun Microsystems',
      from: new Date(2004, 10),
      to: new Date(2010, 11),
      position: 'System Admin',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus at rem totam sed qui! Quas.',
    },
  ],
  educations: [
    {
      school: 'University of Washington',
      from: new Date(1993, 9),
      to: new Date(1999, 6),
      degree: 'Master',
      field: 'Computer Science',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus at rem totam sed qui! Quas.',
    },
  ],
  repos: [
    {
      name: 'Repo #1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,deserunt.',
      link: '#',
      stars: 42,
      watchers: 2,
      forks: 4,
    },
    {
      name: 'Repo #2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,deserunt.',
      link: '#',
      stars: 21,
      watchers: 1,
      forks: 2,
    },
    {
      name: 'Repo #3',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,deserunt.',
      link: '#',
      stars: 50,
      watchers: 32,
      forks: 12,
    },
  ],
};
export default DevFull;

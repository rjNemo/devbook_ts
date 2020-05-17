import Education from '../types/Education';
import Experience from '../types/Experience';
import Links from '../types/Links';
import Repo from '../types/Repo';

/** Shorter dev interface */
export interface DevSummary {
  id: string;
  displayName: string;
  picture: string;
  description: string;
  location: string;
  skills: string[];
}

/** Full developer profile information.
 * @extends DevSummary to avoid duplication
 */
interface Dev extends DevSummary {
  isActive: boolean;
  bio: string;
  status: string;
  company: string;
  links: Links;
  experiences: Experience[];
  educations: Education[];
  repos: Repo[];
}

/** create profile tagline */
export const getDescription = (status: string, company: string) =>
  `${status} at ${company}`;

/** blank Dev serve as placeholder when initializing a new profile */
export const blankDev: Dev = {
  id: '42',
  isActive: true,
  displayName: '',
  status: 'Developer',
  company: '',
  picture: '',
  description: '',
  location: '',
  skills: [],
  links: {
    website: '',
    instagram: '',
    facebook: '',
    linkedin: '',
    twitter: '',
    github: '',
    youtube: '',
  },
  bio: '',
  experiences: [],
  educations: [],
  repos: [],
};

/**
 * sample Dev for development and tests
 */
export const dummyDev: Dev = {
  id: '0',
  isActive: true,
  displayName: 'John Doe',
  status: 'Developer',
  company: 'Microsoft',
  picture:
    'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
  description: 'Developer at Microsoft',
  location: 'Seattle, WA',
  skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
  links: {
    website: '#',
    instagram: 'http://insta.com',
    facebook: '#',
    linkedin: '#',
    twitter: '#',
    github: '#',
    youtube: '#',
  },
  bio:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis unde quae vero enim adipisci voluptas magni sapiente reprehenderit error minima.',
  experiences: [
    {
      id: 1,
      company: 'Microsoft',
      from: new Date(2011, 10),
      to: 'Current',
      position: 'Senior Developer',
      location: 'USA',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas corrupti rem eius, accusantium ipsum vel eveniet magnam voluptatum? Minus, voluptatum!',
    },
    {
      id: 0,
      company: 'Sun Microsystems',
      location: 'USA',
      from: new Date(2004, 10),
      to: new Date(2010, 11),
      position: 'System Admin',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus at rem totam sed qui! Quas.',
    },
  ],
  educations: [
    {
      id: 0,
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
export default Dev;

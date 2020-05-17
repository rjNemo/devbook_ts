import Education from '../types/Education';
import Experience from '../types/Experience';
import Links from '../types/Links';
import Repo from '../types/Repo';

/** Shorter dev interface */
export interface DevSummary {
  id?: string;
  displayName: string;
  avatarUrl: string;
  description: string;
  location: string;
  skills: string[];
}

/** Full developer profile information.
 * @extends DevSummary to avoid duplication
 */
interface IDev extends DevSummary {
  isActive: boolean;
  bio: string;
  status: string;
  company: string;
  github: string;
  links: Links;
  experiences: Experience[];
  educations: Education[];
  repos: Repo[];
}

/** class implementing IDev.
 * No constructor is provided.
 * new Dev() returns a placeholder used when initializing a new profile.
 * id is not specified to not overwrite document uid.
 */
export class Dev implements IDev {
  id?: string;
  isActive = true;
  displayName = '';
  status = 'Developer';
  company = '';
  avatarUrl = '';
  description = '';
  location = '';
  skills: string[] = [];
  github: string = '';
  links: Links = {
    website: '',
    instagram: '',
    facebook: '',
    linkedin: '',
    twitter: '',
    github: '',
    youtube: '',
  };
  bio = '';
  experiences: Experience[] = [];
  educations: Education[] = [];
  repos: Repo[] = [];
}

/**
 * sample Dev for development and tests
 */
export const dummyDev: IDev = {
  id: '0',
  isActive: true,
  displayName: 'John Doe',
  status: 'Developer',
  company: 'Microsoft',
  avatarUrl:
    'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
  description: 'Developer at Microsoft',
  location: 'Seattle, WA',
  skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
  github: '',
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

/** dummy devSummary profiles for debug and development only */
export const developers: DevSummary[] = [
  {
    id: '0',
    displayName: 'John Doe',
    avatarUrl:
      'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    description: 'Developer at Microsoft',
    location: 'Seattle, WA',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
  },
  {
    id: '42',
    displayName: 'Ruidy Nemausat',
    avatarUrl:
      'https://lh3.googleusercontent.com/a-/AOh14GhncH95MWKwPR3TRKy4eVd4n6w0-fobe4dhiam2xA',
    description: 'Fullstack Engineer at DESY',

    location: 'Hamburg, DE',
    skills: ['React', 'TypeScript', 'Redux', 'Nodejs'],
  },
];

export default IDev;

import {TimePeriod} from '../types';

interface Experience {
  employer: string;
  from: Date;
  to: TimePeriod;
  position: string;
  description: string;
}

export default Experience;

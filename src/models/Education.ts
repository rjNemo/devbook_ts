import {TimePeriod} from '../types';

interface Education {
  school: string;
  from: TimePeriod;
  to: TimePeriod;
  degree: string;
  field: string;
  description: string;
}

export default Education;

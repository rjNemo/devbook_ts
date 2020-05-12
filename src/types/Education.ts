import TimePeriod from '../types/TimePeriod';

interface Education {
  school: string;
  from: TimePeriod;
  to: TimePeriod;
  degree: string;
  field: string;
  description: string;
}

export default Education;

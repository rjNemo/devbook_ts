import TimePeriod from '../types/TimePeriod';

interface Education {
  id: number;
  school: string;
  degree: string;
  from: TimePeriod;
  to: TimePeriod;
  field: string;
  description: string;
}

export default Education;

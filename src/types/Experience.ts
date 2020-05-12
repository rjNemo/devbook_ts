import TimePeriod from '../types/TimePeriod';

interface Experience {
  company: string;
  from: Date;
  to: TimePeriod;
  position: string;
  description: string;
}

export default Experience;

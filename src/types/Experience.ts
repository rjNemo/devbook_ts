import TimePeriod from '../types/TimePeriod';

interface Experience {
  company: string;
  from: TimePeriod;
  to: TimePeriod;
  position: string;
  description: string;
  location: string;
}

export default Experience;

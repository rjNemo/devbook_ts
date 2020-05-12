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

export default DevFull;

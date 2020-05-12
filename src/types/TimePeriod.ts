import moment from 'moment';

type TimePeriod = Date | 'Current';

/** format exp date to be used */
const parseDate = (date: TimePeriod): string => {
  if (date === 'Current') {
    return date;
  }
  return moment(date).format('MMM. YYYY');
};

export const getTimePeriod = (from: TimePeriod, to: TimePeriod): string =>
  `${parseDate(from)} - ${parseDate(to)}`;

export default TimePeriod;

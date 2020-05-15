import moment from 'moment';

type TimePeriod = string | Date | 'Current';

/** format exp date to be used */
export const parseDate = (date: TimePeriod): string => {
  if (date === 'Current') {
    return date;
  }
  return moment(date).format('MMM. YYYY');
};

/**
 * Formats a time period assignment: experience or education.
 * @param from Start of the assignment. Must be a Date
 * @param to End of the assignment. Can be "Current"
 */
export const getTimePeriod = (from: TimePeriod, to: TimePeriod): string =>
  `${parseDate(from)} - ${parseDate(to)}`;

export default TimePeriod;

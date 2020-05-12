import moment from 'moment';

export type TimePeriod = Date | 'Current';

/** format exp date to be used */
export const parseDate = (date: TimePeriod): string => {
  if (date === 'Current') {
    return date;
  }
  return moment(date).format('MMM. YYYY');
};

import moment from 'moment';

const useDate = () => {
  // Parameter will be a date obj or string
  const formatDateApi = (date) => {
    const dateToDate = moment(date).format('YYYY-MM-DD');
    return dateToDate;
  };
  // Parameter will be a date obj or string
  const dateToString = (date) => {
    const dateString = moment(date).format('MMM Do YY');
    return dateString;
  };
  // Parameter will be a string with format YYYY-MM-DD or MMM Do YY
  const stringToDate = (date) => moment(date);

  const currentDate = () => moment();

  return { formatDateApi, dateToString, stringToDate, currentDate };
};

export { useDate };

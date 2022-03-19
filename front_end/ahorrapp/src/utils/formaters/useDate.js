const useDate = () => {
  const formatDate = (date) => {
    const dateToDate = new Date(date);
    let month = (dateToDate.getMonth() + 1).toString();
    let day = dateToDate.getDate().toString();
    const year = dateToDate.getFullYear();
    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return [year, month, day].join('-');
  };

  const dateToString = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const dateString = date.toLocaleDateString('en-US', options);
    return dateString;
  };

  return { formatDate, dateToString };
};

export { useDate };

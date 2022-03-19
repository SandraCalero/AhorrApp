const useDate = () => {
  const formatDate = (date) => {
    const dateToDate = new Date(date);
    let month = (dateToDate.getMonth() + 1).toString();
    let day = dateToDate.getDate().toString();
    const year = dateToDate.getFullYear();
    if (month.length < 2) {
      month = "0" + month;
    }
    if (day.length < 2) {
      day = "0" + day;
    }
    return [year, month, day].join("-");
  };
  return { formatDate };
};

export { useDate };

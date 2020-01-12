const calNumDayOfMonth = (month, year) => new Date(year, month, 0).getDate();

export const buildTimePeriod = (month, year) => {
  
  const numDayOfMonth = calNumDayOfMonth(month, year);

  const fromDate = year + '-' + month + '-01';
  const toDate = year + '-' + month + '-' + numDayOfMonth;

  return {
    fromDate, toDate
  };
};

export default buildTimePeriod;
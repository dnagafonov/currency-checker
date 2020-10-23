export const getConvertedDate = (date) => date.toISOString().slice(0,10);
export const convertRatesDate = rates => rates.map(e => ({ ...e, Date: e.Date.slice(0, 10)}))
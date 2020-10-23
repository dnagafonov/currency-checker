export const getStartDateSelector = state => state.startDate;
export const getEndDateSelector = state => state.endDate;
export const getActiveCurrencySelector = state => state.activeCurrency;
export const getCurrencyIDSelector = state => state.currencies[state.activeCurrency];
export const getExchangeRatesSelector = state => state.rates;
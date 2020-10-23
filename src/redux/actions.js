const { proxyAPI } = require("../tools/axios");
const { SET_EXCHANGE_RATES } = require("./constants");

export const getExchangeRates = (startDate, endDate, currencyID) => async (dispatch) => {
  const exchangeRates = await proxyAPI
    .get(`/exchange?startDate=${startDate}&endDate=${endDate}&currencyID=${currencyID}`)
    .then((res) => res.data)
    .catch((e) => console.error(e.message));
    console.log(exchangeRates);
  dispatch({
    type: SET_EXCHANGE_RATES,
    rates: exchangeRates
  })
};

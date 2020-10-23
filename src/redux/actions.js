import { errorToast } from "../tools/toasts";

const { proxyAPI } = require("../tools/axios");
const { SET_EXCHANGE_RATES, SET_ACTIVE_CURRENCY, SET_DATE } = require("./constants");

export const setActiveCurrency = currency => ({
  type: SET_ACTIVE_CURRENCY,
  currency
});

export const setDate = (moments) => {
  const dates = moments.map(e => e.format().slice(0, 10));
  return {
    type: SET_DATE,
    startDate: dates[0],
    endDate: dates[1]
  };
};

export const getExchangeRates = (startDate, endDate, currencyID) => async (dispatch) => {
  try {
    const exchangeRates = await proxyAPI
    .get(`/exchange?startDate=${startDate}&endDate=${endDate}&currencyID=${currencyID}`)
    .then((res) => res.data)
    .catch((e) => console.error(e.message));
  dispatch({
    type: SET_EXCHANGE_RATES,
    rates: exchangeRates
  })
  } catch (e) {
    errorToast("Error receiving data")
  }
};

import { errorToast } from "../tools/toasts";

const { proxyAPI } = require("../tools/axios");
const { SET_EXCHANGE_RATES } = require("./constants");

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

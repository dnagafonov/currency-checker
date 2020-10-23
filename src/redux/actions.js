import { errorToast, infoToast } from "../tools/toasts";
import { proxyAPI } from "../tools/axios";
import { SET_EXCHANGE_RATES, SET_ACTIVE_CURRENCY, SET_DATE } from "./constants";

export const setActiveCurrency = currency => ({
  type: SET_ACTIVE_CURRENCY,
  currency
});

export const setDate = (moments) => {
  try {
    const dates = moments.map(e => e.format().slice(0, 10));
    return {
      type: SET_DATE,
      startDate: dates[0],
      endDate: dates[1]
    };
  } catch {
    errorToast("Incorrect date")
  }
};

export const getExchangeRates = (startDate, endDate, currencyID) => async (dispatch) => {
  try {
    infoToast("Loading...");
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

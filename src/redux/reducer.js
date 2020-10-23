import produce from "immer";
import { convertRatesDate, getConvertedDate } from "../tools/tools";
import { SET_ACTIVE_CURRENCY, SET_DATE, SET_EXCHANGE_RATES } from "./constants";

const init = {
  currencies: {
    USD: 145,
    EUR: 292,
    RUB: 298,
  },
  activeCurrency: "USD",
  startDate: getConvertedDate(new Date("2020-10-13")),
  endDate: getConvertedDate(new Date()),
  rates: null
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case SET_ACTIVE_CURRENCY:
      draft.activeCurrency = action.activeCurrency;
      return draft;
    case SET_DATE:
      draft.startDate = action.startDate;
      draft.endDate = action.endDate;
      return draft;
    case SET_EXCHANGE_RATES:
      const convertedRated = convertRatesDate(action.rates);
      draft.rates = convertedRated;
      return draft;
    default:
      return draft;
  }
}, init);

export { reducer };

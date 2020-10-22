import produce from "immer";
import { getTodayDate } from "../tools/tools";

const init = {
  currencies: {
    USD: 145,
    EUR: 292,
    RUB: 298
  },
  activeCurrency: "USD",
  startDate: getTodayDate(),
  endDate: getTodayDate()
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    default:
      return draft;
  }
}, init);

export { reducer };
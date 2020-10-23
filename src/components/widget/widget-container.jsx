import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setDate, setActiveCurrency } from "../../redux/actions";
import {
  getEndDateSelector,
  getStartDateSelector,
  getActiveCurrencySelector,
} from "../../redux/selectors";
import Widget from "./widget";

const WidgetContainer = ({
  setDate,
  setActiveCurrency,
  startDate,
  endDate,
  activeCurrency,
}) => {
  useEffect(() => {}, []);
  return (
    <Widget
      startDate={startDate}
      endDate={endDate}
      activeCurrency={activeCurrency}
      onDateChange={setDate}
      onCurrencyChange={setActiveCurrency}
    />
  );
};

const mapState = (state) => ({
  startDate: getStartDateSelector(state),
  endDate: getEndDateSelector(state),
  activeCurrency: getActiveCurrencySelector(state),
});

export default connect(mapState, { setDate, setActiveCurrency })(
  WidgetContainer
);

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCurrencyIDSelector, getEndDateSelector, getStartDateSelector, getExchangeRatesSelector } from '../../redux/selectors'
import Chart from './chart'
import { getExchangeRates } from "../../redux/actions"
import PropTypes from 'prop-types';

const ChartContainer = ({ startDate, endDate, currencyID, rates, getExchangeRates }) => {
  useEffect(() => {
    getExchangeRates(startDate, endDate, currencyID);
  }, [startDate, endDate, currencyID])
  if(rates === null) return <div className="loading h2">Loading...</div>
  return <Chart rates={rates} />
}

ChartContainer.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  currencyID: PropTypes.number.isRequired,
  rates: PropTypes.oneOfType([null, PropTypes.array]),
  getExchangeRates: PropTypes.func.isRequired
}

const mapState = state => ({
  startDate: getStartDateSelector(state),
  endDate: getEndDateSelector(state),
  currencyID: getCurrencyIDSelector(state),
  rates: getExchangeRatesSelector(state)
})

export default connect(mapState, { getExchangeRates })(ChartContainer);
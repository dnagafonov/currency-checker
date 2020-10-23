import React, { memo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import PropTypes from 'prop-types';

import "./chart.scss";

const Chart = ({ rates }) => {
  return (
    <LineChart
      width={700}
      height={400}
      data={rates}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Date" />
      <YAxis dataKey="Cur_OfficialRate" type="category" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Cur_OfficialRate" stroke="#82ca9d" />
    </LineChart>
  );
};

Chart.propTypes = {
  rates: PropTypes.arrayOf(PropTypes.exact({
    Date: PropTypes.string.isRequired,
    Cur_OfficialRate: PropTypes.number.isRequired,
    Cur_ID: PropTypes.number.isRequired
  }))
}

export default memo(Chart);

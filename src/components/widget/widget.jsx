import React from "react";
import { DatePicker, Select } from "antd";
import moment from "moment";
import PropTypes from 'prop-types';

import "./widget.scss";
import "antd/dist/antd.css";

const { RangePicker } = DatePicker;

const Widget = ({
  startDate,
  endDate,
  activeCurrency,
  onCurrencyChange,
  onDateChange,
}) => {
  return (
    <div className="widget">
      <Select defaultValue={activeCurrency} onChange={onCurrencyChange}>
        <Select.Option value="USD">USD</Select.Option>
        <Select.Option value="EUR">EUR</Select.Option>
        <Select.Option value="RUB">RUB</Select.Option>
      </Select>
      <RangePicker
        defaultValue={[moment(startDate), moment(endDate)]}
        onChange={onDateChange}
      />
    </div>
  );
};

Widget.propTypes = {
  onDateChange: PropTypes.func.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  activeCurrency: PropTypes.string.isRequired
}

export default Widget;

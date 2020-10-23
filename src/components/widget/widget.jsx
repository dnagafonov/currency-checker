import React from "react";
import { DatePicker } from "antd";
import moment from 'moment';

import "./widget.scss";
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;

const Widget = ({ startDate, endDate, activeCurrency, onCurrencyChange, onDateChange }) => {
  return (
    <div className="widget">
      <RangePicker defaultValue={[moment(startDate), moment(endDate)]} onChange={onDateChange} />
    </div>
  );
};

export default Widget;

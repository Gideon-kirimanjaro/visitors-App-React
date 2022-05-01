import { ButtonsProps } from "@syncfusion/ej2-react-inputs";
import React, { useState } from "react";
import DatePicker from "react-date-picker";
import DateTime from "./Ui/DateTime";

const DateSelector = (props) => {
  const [date, onChange] = useState([new Date().toString()]);
  const dateHandler = (date) => {
    props.onDateChange(date);
  };
  return (
    <div>
      <DateTime>
        <DateTime.Title>Date</DateTime.Title>
        <DateTime.Body>
          <DatePicker
            minDate={new Date()}
            onChange={dateHandler}
            value={date}
          />
        </DateTime.Body>
      </DateTime>
    </div>
  );
};
export default DateSelector;

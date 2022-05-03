import { ButtonsProps } from "@syncfusion/ej2-react-inputs";
import React, { useState } from "react";
import DatePicker from "react-date-picker";
import DateTime from "./Ui/DateTime";

const DateSelector = (props) => {
  const [date, setSelectedDate] = useState([new Date().toString()]);
  const dateHandler = (date) => {
    setSelectedDate(date);
    props.onDateChange(date);
  };
  return (
    <div>
      <DateTime>
        <DateTime.Title>Date</DateTime.Title>
        <DateTime.Body>
          <DatePicker
            minDate={new Date()}
            maxDate={new Date()}
            onChange={dateHandler}
            value={date}
            format="dd-MM-y"
          />
        </DateTime.Body>
      </DateTime>
    </div>
  );
};
export default DateSelector;

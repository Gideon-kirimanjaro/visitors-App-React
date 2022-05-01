import { useState } from "react";
import TimePicker from "react-time-picker";
import DateTime from "./Ui/DateTime";
const Time = (props) => {
  const [value, onChange] = useState("10:00");
  const timeHandler = (value) => {
    props.onTimeChange(value);
  };
  return (
    <div>
      <DateTime>
        <DateTime.Title>Time In</DateTime.Title>
        <DateTime.Body>
          <TimePicker onChange={timeHandler} value={value} />
        </DateTime.Body>
      </DateTime>
    </div>
  );
};
export default Time;

import { Col, Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import React from "react";
import Time from "./Components/Time";
import DateSelector from "./Components/DateSelector";
import Signature from "./Components/Signature/Signature";
import StyledButton from "./Components/Ui/StyledButton";
import Data from "./Data";
import axios from "axios";
import "./App.css";
import { useState } from "react";
import SearchFunction from "./Components/SearchFunction";
function App() {
  //------------------------STATE---------------
  const [formValues, setFormValues] = useState({ clientName: "", purpose: "" });
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [formErrors, setFormErrors] = useState(false);
  const [purposeErrors, setPurposeErrors] = useState(false);
  const [validateTime, setValidateTime] = useState(false);
  const [validateDate, setValidateDate] = useState(false);
  const [successForm, setSuccessForm] = useState(true);
  const endPoint =
    "https://limuru-visitors-app-default-rtdb.firebaseio.com/visitors/.json";

  //----------------------METHODS------------------
  //----value handlers
  const clientNameHandler = (e) => {
    setFormValues({ ...formValues, clientName: e.target.value });
    if (e.target.value.trim().length > 0) {
      setFormErrors(false);
      setSuccessForm(false);
    }
  };
  const clientPurposeHandler = (e) => {
    setFormValues({ ...formValues, purpose: e.target.value });
    if (e.target.value.trim().length > 0) {
      setPurposeErrors(false);
    }
  };
  //------Form Handlers

  const validate = (values) => {
    const clientNameValue = values.clientName.trim().length;
    const clientPurposeValue = values.purpose.trim().length;
    if (clientNameValue === 0) {
      setFormErrors(true);
    }
    if (clientPurposeValue === 0) {
      setPurposeErrors(true);
    }
  };
  const timeChangeHandler = (enteredTime) => {
    setTime(enteredTime);
  };
  const dateChangeHandler = (enteredDate) => {
    const year = enteredDate.getFullYear();
    const month = enteredDate.getMonth();
    const day = enteredDate.getDate();
    setDate(`${day}/${month}/${year}`);
  };
  const submitForm = (e) => {
    e.preventDefault();
    validate(formValues);
    const submitData = {
      fullName: formValues.clientName,
      clientPurpose: formValues.purpose,
      clientDate: date,
      clientTime: time,
    };
    if (
      formValues.clientName !== "" &&
      formValues.purpose !== "" &&
      date !== undefined &&
      time !== undefined
    ) {
      axios
        .post(endPoint, submitData)
        .then(setFormValues({ clientName: "", purpose: "" }))
        .then(setSuccessForm(true))
        .then((res) => {
          console.log(res.data);
        })
        .catch((Error) => {
          console.log(Error);
        });
    } else if (date === undefined) {
      setValidateDate(true);
    } else if (time === undefined || time === "") {
      setValidateTime(true);
    } else {
      setValidateDate(false);
      setValidateTime(false);
    }
  };
  return (
    <div id="main" className="d-md-flex justify-content-center px-5 ">
      <Row className="">
        <h4
          id="header"
          className="d-flex justify-content-center mt-3 text-success"
        >
          <u>LIMURU SUB-COUNTY VISITORS APP</u>
        </h4>
        <div className="d-md-flex mx-2  justify-content-around">
          <div className="px-sm-5">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>
                  <h5>Name</h5>
                </Form.Label>
                <Form.Control
                  style={{
                    borderColor: formErrors ? "red" : "green",
                    background: formErrors ? "#FFA07A" : "transparent",
                  }}
                  required
                  onChange={clientNameHandler}
                  value={formValues.clientName}
                  type="text"
                  placeholder="Enter Name"
                />
                <span>
                  {formErrors && (
                    <h5 className="text-danger bolder">Fill your name!</h5>
                  )}
                </span>
              </Form.Group>
              <Time onTimeChange={timeChangeHandler}></Time>
              <span>
                {validateTime && (
                  <h5 className="text-danger bolder">select the time!</h5>
                )}
              </span>
              <DateSelector onDateChange={dateChangeHandler}></DateSelector>
              <span>
                {validateDate && (
                  <h5 className="text-danger bolder">set the date!</h5>
                )}
              </span>
              <Form.Group className="mb-3">
                <Form.Label>
                  <h5>Purpose of visit</h5>
                </Form.Label>
                <Form.Control
                  style={{
                    borderColor: purposeErrors ? "red" : "green",
                    background: purposeErrors ? "#FFA07A" : "transparent",
                  }}
                  required
                  onChange={clientPurposeHandler}
                  value={formValues.purpose}
                  type="text"
                  placeholder="Purpose of visit"
                />
                <span>
                  {purposeErrors ? (
                    <h5 className="text-danger">
                      Fill the purpose of your visit!
                    </h5>
                  ) : null}
                </span>
              </Form.Group>
            </Form>
            <Signature />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          {successForm ? (
            <h5 className="text-success">visitation captured successfully!</h5>
          ) : null}
        </div>
        <div className="d-flex justify-content-center">
          <div>
            <Col>
              <StyledButton onClick={submitForm}>Submit</StyledButton>
            </Col>
          </div>
        </div>
      </Row>
      <div className="mt-3">
        <div className="d-flex justify-content-center mt-3"></div>
        <div className="d-flex justify-content-center">
          <Data />
        </div>
      </div>
    </div>
  );
}

export default App;

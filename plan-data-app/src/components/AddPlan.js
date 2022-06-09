import axios from "axios";
import React, { useState, useEffect } from "react";

const url = "http://localhost:4001/planData";
const AddPlan = () => {
  const [planData, setPlanData] = useState({
    planValue: "",
    data: "",
    calls: "",
    addOns: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [valid, setValid] = useState(false);
  const [mandatory, setMandatory] = useState(false);
  const [minVal] = useState(200);
  const [minData] = useState(20);
  const [planErr, setPlanErr] = useState("");
  const [dataErr, setDataErr] = useState("");
  const [messages] = useState({
    MANDATORY: "ALL fields are required",
    ERROR: "Something went wrong",
    PLAN_ERR: " Plan Value must not be less than 200 ",
    DATA_ERR: "Data value must be greater than 20",
    SUCCESS_MESSAGE: "Plan Successfully Added with plan id ",
  });
  const changeHandler = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "planValue":
        if (value < minVal) {
          setPlanErr(messages.PLAN_ERR);
          setValid(false);
        } else {
          setPlanData({ ...planData, [name]: value });
          setPlanErr("");
        }
        break;

      case "data":
        if (value < minData) {
          setDataErr(messages.DATA_ERR);
        } else {
          setPlanData({ ...planData, [name]: value });
          setDataErr("");
        }
        break;

      case "calls":
        if (name === "calls" && event.target.checked === false) {
          setMandatory(true);
        } else if (value === "Yes" && event.target.checked === true) {
          setMandatory(false);
          setValid(true);
          setPlanData({ ...planData, [name]: value });
        } else {
          console.log("No");
          setMandatory(false);
          setValid(true);
          setPlanData({ ...planData, [name]: "No" });
        }
        break;

      case "addOns":
        if (value.trim() === "") {
          setMandatory(true);
        } else {
          setPlanData({ ...planData, [name]: value });
          setMandatory(false);
          setValid(true);
        }
        break;

      default:
        // setValid(true)
        break;
    }
  };
  const submit = (e) => {
    e.preventDefault();
    const datas = {
      planValue: planData.planValue,
      data: planData.data,
      calls: planData.calls,
      addOns: planData.addOns,
    };

    if (
      datas.planValue.trim() !== "" &&
      datas.data.trim() !== "" &&
      datas.calls.trim() !== "" &&
      datas.addOns.trim() !== ""
    ) {
      axios
        .post(url, datas)
        .then((res) => {
          if (res.status === 201) {
            setSuccessMessage(messages.SUCCESS_MESSAGE + res.data.id);
          } else {
            setErrorMessage(messages.ERROR);
          }
        })
        .catch((error) => {
          setErrorMessage(messages.ERROR);
        });
      setPlanData({ planValue: "", data: "", addOns: "", calls: "" });
    } else {
      setErrorMessage(messages.MANDATORY);
    }
  };
  return (
    <>
      {successMessage.trim() !== "" && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}
      {errorMessage.trim() !== "" && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}{" "}
        </div>
      )}
      <div className="container">
        <form noValidate onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="planValue">PlanValue</label>
            <input
              type="number"
              className="form-control"
              id="planValue"
              name="planValue"
              min={minVal}
              onChange={changeHandler}
              required={!mandatory}
            />
          </div>
          {planErr.trim() !== "" && (
            <div className="alert alert-danger" role="alert">
              {planErr}{" "}
            </div>
          )}
          <div className="form-group">
            <label htmlFor="data">Data (GB)</label>
            <input
              type="number"
              className="form-control"
              id="data"
              name="data"
              min={minData}
              onChange={changeHandler}
              required={!mandatory}
            />
          </div>
          {dataErr.trim() !== "" && (
            <div className="alert alert-danger" role="alert">
              {dataErr}{" "}
            </div>
          )}
          <div className="row">
            <label>Calls</label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="yes"
                name="calls"
                value="Yes"
                onChange={changeHandler}
                required={!mandatory}
              />
              <label className="form-check-label" htmlFor="calls">
                Yes
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="no"
                name="calls"
                value="No"
                onChange={changeHandler}
                required={!mandatory}
              />
              <label className="form-check-label" htmlFor="calls">
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="addOns">AddOns</label>
            <input
              type="texarea"
              className="form-control"
              id="addOns"
              name="addOns"
              value={planData.addOns}
              onChange={changeHandler}
              required={!mandatory}
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={!valid}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPlan;

import React, { useState } from "react";
import WolfDataService from "../services/wolf.service";

const WolfAdd = () => {
  const initialWolfState = {
    id: null,
    name: "",
    gender: "",
    birthday: "",
  };
  const [wolf, setWolf] = useState(initialWolfState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    name: " ",
    gender: " ",
    birthday: " ",
  });
  const [hasError, setHasError] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setWolf({ ...wolf, [name]: value });
    checkError(name, value);
  };

  const checkError = (name, value) => {
    let newErrors = { ...errors };
    switch (name) {
      case "name":
        newErrors.name = value.length < 1 ? "No name given!!" : "";
        break;
      case "gender":
        newErrors.gender =
          value === "female" || value === "male"
            ? ""
            : "Gender not male or female";
        break;
      case "birthday":
        newErrors.birthday = Date.parse(value) ? "" : "Invalid date given!";
        break;
      default:
        break;
    }
    setErrors(newErrors);
    setHasError(showErrors(newErrors).length > 0);
  };

  const showErrors = (errors) => {
    return Object.values(errors).filter((val) => val.length > 0);
  };

  const saveWolf = () => {
    var data = {
      name: wolf.name,
      gender: wolf.gender,
      birthday: wolf.birthday,
    };
    if (hasError) {
      console.error("Invalid Form");
    } else {
      WolfDataService.create(data)
        .then((response) => {
          setWolf({
            id: response.data.id,
            name: response.data.name,
            gender: response.data.gender,
            birthday: response.data.birthday,
          });
          setSubmitted(true);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const newWolf = () => {
    setWolf(initialWolfState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Your wolf has been submitted successfully</h4>
          <button className="btn btn-success" onClick={newWolf}>
            Add another one
          </button>
        </div>
      ) : (
        <div className="form">
          <div className="form-group">
            <label htmlFor="name" className="col-form-label">
              Name
            </label>
            <input
              className="form-control"
              id="name"
              required
              value={wolf.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <legend className="col-form-label">Gender</legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={wolf.gender === "male"}
                  onChange={handleInputChange}
                ></input>
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={wolf.gender === "female"}
                  onChange={handleInputChange}
                ></input>
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="birthday" className="col-form-label">
              Birthday
            </label>
            <input
              type="date"
              className="form-control"
              id="birthday"
              required
              value={wolf.birthday}
              onChange={handleInputChange}
              name="birthday"
            />
          </div>

          {showErrors(errors) &&
            showErrors(errors).map((error) =>
              error.trim().length > 0 ? (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              ) : (
                ""
              )
            )}

          <button
            onClick={saveWolf}
            disabled={hasError}
            className="btn btn-success"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default WolfAdd;

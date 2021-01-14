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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setWolf({ ...wolf, [name]: value });
  };

  const saveWolf = () => {
    var data = {
      name: wolf.name,
      gender: wolf.gender,
      birthday: wolf.birthday,
    };

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
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={wolf.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            {/* <label htmlFor="gender">Gender</label>
            <input
              type="text"
              className="form-control"
              id="gender"
              required
              value={wolf.gender}
              onChange={handleInputChange}
              name="gender"
            /> */}
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

          <div className="form-group">
            <label htmlFor="birthday">Birthday</label>
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

          <button onClick={saveWolf} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default WolfAdd;

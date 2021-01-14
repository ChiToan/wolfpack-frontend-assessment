import React, { useState, useEffect } from "react";
import WolfDataService from "../services/wolf.service";

const WolfProfile = (props) => {
  const initialWolfState = {
    id: null,
    name: "",
    gender: "",
    birthday: "",
  };
  const [currentWolf, setCurrentWolf] = useState(initialWolfState);
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentWolf({ ...currentWolf, [name]: value });
  };

  const getWolf = (id) => {
    WolfDataService.get(id)
      .then((response) => {
        console.log(response.data);
        setCurrentWolf(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getWolf(props.match.params.id);
  }, [props.match.params.id]);

  const updateWolf = () => {
    WolfDataService.update(currentWolf.id, currentWolf)
      .then((response) => {
        console.log(response.data);
        setMessage("The wolf was updates successfully");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteWolf = () => {
    WolfDataService.remove(currentWolf.id)
      .then((response) => {
        console.log(response.data);
        props.history.push("/wolves");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentWolf ? (
        <div className="edit-form">
          <h4>Wolf</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentWolf.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              {/* <label htmlFor="gender">Gender</label>
            <input
              type="text"
              className="form-control"
              id="gender"
              required
              value={currentWolf.gender}
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
                  checked={currentWolf.gender === "male"}
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
                  checked={currentWolf.gender === "female"}
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
                value={currentWolf.birthday}
                onChange={handleInputChange}
                name="birthday"
              />
            </div>
          </form>

          <button className="btn btn-danger mr-2" onClick={deleteWolf}>
            Delete
          </button>

          <button
            type="submit"
            className="btn btn-success"
            onClick={updateWolf}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Wolf...</p>
        </div>
      )}
    </div>
  );
};

export default WolfProfile;

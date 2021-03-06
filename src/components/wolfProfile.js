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
  const [errors, setErrors] = useState({
    id: "",
    name: "",
    gender: "",
    birthday: "",
  });
  const [hasError, setHasError] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentWolf({ ...currentWolf, [name]: value });
    checkError(name, value);
  };

  const checkError = (name, value) => {
    let newErrors = { ...errors };
    switch (name) {
      case "id":
        newErrors.id = value < 0 ? "No id specified!" : "";
        break;
      case "name":
        newErrors.name = value.trim().length < 1 ? "No name given!" : "";
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
    setHasError(showErrors(newErrors).length > 0)
  };

  const showErrors = (errors) => {
    return Object.values(errors).filter((val) => val.length > 0);
  }

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
    if (hasError) {
      console.error("Invalid Form");
    } else {
      WolfDataService.update(currentWolf.id, currentWolf)
        .then((response) => {
          console.log(response.data);
          setMessage("The wolf was updates successfully");
        })
        .catch((e) => {
          console.log(e);
        });
    }
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
          <h4>Wolf {currentWolf.id}</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                value={currentWolf.name}
                onChange={handleInputChange}
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

          {showErrors(errors) &&
            showErrors(errors).map((error) => (
              <div className="alert alert-danger" role="alert" key={error}>
                {error}
              </div>
            ))}

          <button className="btn btn-danger mr-2" onClick={deleteWolf}>
            Delete
          </button>

          <button
            type="submit"
            className="btn btn-success"
            onClick={updateWolf}
            disabled={hasError}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Unable to load Wolf</p>
        </div>
      )}
    </div>
  );
};

export default WolfProfile;

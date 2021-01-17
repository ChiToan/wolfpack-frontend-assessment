import React, { useState } from "react";
import { Link } from "react-router-dom";
import PackDataService from "../services/pack.service";

const PackAdd = () => {
  const initialPackState = {
    id: null,
    name: "",
    lng: "",
    lat: "",
  };
  const [pack, setPack] = useState(initialPackState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    name: " ",
    lng: " ",
    lat: " ",
  });
  const [hasError, setHasError] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPack({ ...pack, [name]: value });
    checkError(name, value);
  };

  const checkError = (name, value) => {
    let newErrors = { ...errors };
    switch (name) {
      case "name":
        newErrors.name = value.length < 1 ? "No name given!!" : "";
        break;
      case "lng":
        newErrors.lng =
          isFinite(value) && Math.abs(value) <= 180
            ? ""
            : "Invalid longitude given!";
        break;
      case "lat":
        newErrors.lat =
          isFinite(value) && Math.abs(value) <= 90
            ? ""
            : "Invalid latitude given!";
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

  const savePack = () => {
    var data = {
      name: pack.name,
      lat: pack.lat,
      lng: pack.lng,
    };
    if (hasError) {
      console.error("Invalid Form");
    } else {
      PackDataService.create(data)
        .then((response) => {
          setPack({
            id: response.data.id,
            name: response.data.name,
            lat: response.data.lat,
            lng: response.data.lng,
          });
          setSubmitted(true);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const newPack = () => {
    setPack(initialPackState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Your pack has been submitted successfully</h4>
          <button className="btn btn-success" onClick={newPack}>
            Add another one
          </button>
          <Link to={"/packs"} className="btn btn-primary ml-3">
            Back to list
          </Link>
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
              value={pack.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lng">Longitude</label>
            <input
              type="number"
              className="form-control"
              id="lng"
              name="lng"
              min="-180"
              max="180"
              step="any"
              required
              value={pack.lng}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lat">Latitude</label>
            <input
              type="number"
              className="form-control"
              id="lat"
              name="lat"
              min="-90"
              max="90"
              step="any"
              required
              value={pack.lat}
              onChange={handleInputChange}
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
            onClick={savePack}
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

export default PackAdd;

import React, { useState, useEffect } from "react";
import PackDataService from "../services/pack.service";

const PackProfile = (props) => {
  const initialPackState = {
    id: null,
    name: "",
    lng: "",
    lat: "",
  };
  const [currentPack, setCurrentPack] = useState(initialPackState);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    id: "",
    name: "",
    lng: "",
    lat: "",
  });
  const [hasError, setHasError] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentPack({ ...currentPack, [name]: value });
    checkError(name, value);
  };

  const checkError = (name, value) => {
    let newErrors = { ...errors };
    switch (name) {
      case "id":
        newErrors.id = value < 0 ? "No id specified!" : "";
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

  const getPack = (id) => {
    PackDataService.get(id)
      .then((response) => {
        console.log(response.data);
        setCurrentPack(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getPack(props.match.params.id);
  }, [props.match.params.id]);

  const updatePack = () => {
    if (hasError) {
      console.error("Invalid Form");
    } else {
      PackDataService.update(currentPack.id, currentPack)
        .then((response) => {
          console.log(response.data);
          setMessage("The pack was updates successfully");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const deletePack = () => {
    PackDataService.remove(currentPack.id)
      .then((response) => {
        console.log(response.data);
        props.history.push("/packs");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentPack ? (
        <div className="edit-form">
          <h4>Pack {currentPack.id}</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                value={currentPack.name}
                onChange={handleInputChange}
              />
            </div>
          </form>

          {showErrors(errors) &&
            showErrors(errors).map((error) => (
              <div className="alert alert-danger" role="alert" key={error}>
                {error}
              </div>
            ))}

          <button className="btn btn-danger mr-2" onClick={deletePack}>
            Delete
          </button>

          <button
            type="submit"
            className="btn btn-success"
            onClick={updatePack}
            disabled={hasError}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Unable to load Pack</p>
        </div>
      )}
    </div>
  );
};

export default PackProfile;

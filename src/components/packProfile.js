import React, { useState, useEffect } from "react";
import PackDataService from "../services/pack.service";
import WolfDataService from "../services/wolf.service";

const PackProfile = (props) => {
  const initialPackState = {
    id: null,
    name: "",
    lng: "",
    lat: "",
    wolves: [],
  };
  const [currentPack, setCurrentPack] = useState(initialPackState);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    id: "",
    name: "",
    lng: "",
    lat: "",
  });
  const [hasError, setHasError] = useState(false);
  const [wolves, setWolves] = useState([]);

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
      case "name":
        newErrors.name = value.trim().length < 1 ? "No name given!" : "";
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
    PackDataService.update(currentPack.id, currentPack)
      .then((response) => {
        console.log(response.data);
        setMessage("The pack was updates successfully");
        setTimeout( () => {
          setMessage("")
        }, 5000)
      })
      .catch((e) => {
        console.log(e);
      });
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

  const retrieveWolves = () => {
    WolfDataService.getAll()
      .then((response) => {
        let otherWolves = response.data.filter(
          (wolf) =>
            !currentPack.wolves.find(
              (currentPackWolf) => wolf.id === currentPackWolf.id
            )
        );
        setWolves(otherWolves);
        console.log(response.data);
      })
      .catch((e) => {
        console.log.apply(e);
      });
  };

  const addWolf = (wolf_id) => {
    PackDataService.addwolf(currentPack.id, wolf_id)
      .then((response) => {
        console.log(response.data);
        let newPackWolves = currentPack.wolves.slice();
        newPackWolves.push(wolves.find((wolf) => wolf.id === wolf_id));
        setCurrentPack({ ...currentPack, wolves: newPackWolves });
        setWolves(wolves.filter((wolf) => wolf.id !== wolf_id));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteWolf = (wolf_id) => {
    PackDataService.removewolf(currentPack.id, wolf_id)
      .then((response) => {
        console.log(response.data);
        let newWolves = wolves.slice();
        newWolves.push(currentPack.wolves.find((wolf) => wolf.id === wolf_id));
        setWolves(newWolves);
        setCurrentPack({
          ...currentPack,
          wolves: currentPack.wolves.filter((wolf) => wolf.id !== wolf_id),
        });
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
          <div>
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
                value={currentPack.lng}
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
                value={currentPack.lat}
                onChange={handleInputChange}
              />
            </div>
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
              Update pack information
            </button>
            {message ? <p>{message}</p> : ''}
            
          </div>

          <br />

          <h4>Wolves in pack {currentPack.id}</h4>
          <ul className="list-group" name="wolves">
            {currentPack.wolves &&
              currentPack.wolves.map((wolf, index) => (
                <li
                  className="list-group-item d-flex justify-content-between"
                  key={index}
                >
                  <h5>
                    {" "}
                    {wolf.id} {wolf.name}
                  </h5>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteWolf(wolf.id)}
                  >
                    Remove from pack
                  </button>
                </li>
              ))}
          </ul>
          {wolves.length > 0 ? (
            <div>
              <ul className="list-group">
                {wolves &&
                  wolves.map((wolf, index) => (
                    <li
                      className="list-group-item d-flex justify-content-between"
                      key={index}
                    >
                      <h5>
                        {" "}
                        {wolf.id} {wolf.name}
                      </h5>
                      <button
                        type="button"
                        className="btn btn-success btn-sm"
                        onClick={() => addWolf(wolf.id)}
                      >
                        Add to pack
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <button
              type="button"
              className="btn btn-secondary btn-lg btn-block"
              onClick={retrieveWolves}
            >
              Add new wolf to pack
            </button>
          )}
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

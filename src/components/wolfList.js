import React, { useState, useEffect } from "react";
import WolfDataService from "../services/wolf.service";
import { Link } from "react-router-dom";

const WolfList = () => {
  const [wolves, setWolves] = useState([]);
  const [currentWolf, setCurrentWolf] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrieveWolves();
  }, []);

  const retrieveWolves = () => {
    WolfDataService.getAll()
      .then((response) => {
        setWolves(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log.apply(e);
      });
  };

  const setActiveWolf = (wolf, index) => {
    setCurrentWolf(wolf);
    setCurrentIndex(index);
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Wolves List</h4>

        <ul className="list-group">
          {wolves &&
            wolves.map((wolf, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveWolf(wolf, index)}
                key={index}
              >
                {wolf.name}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentWolf ? (
          <div>
            <h4>Wolf</h4>
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentWolf.name}
            </div>
            <div>
              <label>
                <strong>Birtday:</strong>
              </label>{" "}
              {currentWolf.birthday}
            </div>
            <div>
              <label>
                <strong>Gender:</strong>
              </label>{" "}
              {currentWolf.gender}
            </div>

            <Link
              to={"/wolves/" + currentWolf.id}
              className="btn btn-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Wolf...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WolfList;

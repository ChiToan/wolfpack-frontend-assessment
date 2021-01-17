import React, { useState, useEffect } from "react";
import PackDataService from "../services/pack.service";
import { Link } from "react-router-dom";
import PackListMap from "./packListMap";

const PackList = () => {
  const [packs, setPacks] = useState([]);
  const [currentPack, setCurrentPack] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrievePacks();
  }, []);

  const retrievePacks = () => {
    PackDataService.getAll()
      .then((response) => {
        setPacks(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log.apply(e);
      });
  };

  const setActivePack = (pack, index) => {
    setCurrentPack(pack);
    setCurrentIndex(index);
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Packs List</h4>

        <ul className="list-group">
          {packs &&
            packs.map((pack, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActivePack(pack, index)}
                key={index}
              >
                {pack.name}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentPack ? (
          <div>
            <h4>Pack</h4>
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentPack.name}
            </div>
            <div>
              <label>
                <strong>Longitude:</strong>
              </label>{" "}
              {currentPack.lng}
            </div>
            <div>
              <label>
                <strong>Latitude:</strong>
              </label>{" "}
              {currentPack.lat}
            </div>

            <Link
              to={"/packs/" + currentPack.id}
              className="btn btn-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Pack...</p>
          </div>
        )}
      </div>
        <PackListMap packs={packs} currentPack={currentPack}/>
    </div>
  );
};

export default PackList;

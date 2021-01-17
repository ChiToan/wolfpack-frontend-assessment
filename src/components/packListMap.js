import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const PackListMap = (props) => {
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {props.packs &&
        props.packs.map((pack) => (
          <Marker key={pack.id} coordinates={[pack.lng, pack.lat]}>
            <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
            <text
              textAnchor="middle"
              y="-15"
              style={{ fontFamily: "system-ui", fill: "#F00" }}
            >
              {pack.name}
            </text>
          </Marker>
        ))}
    </ComposableMap>
  );
};

export default PackListMap;

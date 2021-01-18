import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json";

const PackListMap = (props) => {
  return (
    <ComposableMap
      width={980}
      height={600}
      style={{
        width: "100%",
        height: "auto",
      }}
    >
      <Geographies
        geography={geoUrl}
        fill="#D6D6DA"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {props.packs &&
        props.packs.map((pack) => (
          <Marker key={pack.id} coordinates={[pack.lng, pack.lat]}>
            <circle
              r={6}
              fill={
                props.currentPack && pack.id === props.currentPack.id
                  ? "#F00"
                  : "#999"
              }
              stroke="#fff"
              strokeWidth={2}
            />
            <text
              textAnchor="middle"
              y="-15"
              style={{ fontFamily: "system-ui", fill: "#222" }}
            >
              {pack.name}
            </text>
          </Marker>
        ))}
    </ComposableMap>
  );
};

export default PackListMap;

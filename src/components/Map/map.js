import React from "react";
import GoogleMapReact from "google-map-react";
import styles from "./map.module.css";

function Map({ location, zoomLevel }) {
  const defaultProps = {
    center: {
      lat: 54.497014,
      lng: 18.507618,
    },
    zoom: 13,
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;

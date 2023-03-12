import { useState } from "react";
import Map, { NavigationControl } from "react-map-gl";

const InteractiveMap = () => {
  const token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  const [mapViewState, setMapViewState] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 2,
  });

  return (
    <Map
      mapboxAccessToken={token}
      mapStyle="mapbox://styles/szymczyki/clf4gnmia005x01mrdaz1cdx4"
      {...mapViewState}
      onMove={(next) => setMapViewState(next.viewState)}
      style={{ width: "100vw", height: "100vh" }}
      cursor="auto"
      renderWorldCopies={false}
    >
      <NavigationControl />
    </Map>
  );
};

export default InteractiveMap;

import { useEffect, useState } from "react";
import Map, { NavigationControl } from "react-map-gl";
import DeckOverlay from "./DeckOverlay";
import { fetchData } from "../helpers/dataFetcher";

const InteractiveMap = () => {
  const token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  const [mapViewState, setMapViewState] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 2,
  });

  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetchData()
      .then((res) => setCountriesData(res))
      .catch((err) => console.log(err));
  }, []);

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
      <DeckOverlay />
    </Map>
  );
};

export default InteractiveMap;

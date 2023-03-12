import { useEffect, useState } from "react";
import Map, { NavigationControl } from "react-map-gl";
import DeckOverlay from "./DeckOverlay";
import { fetchData } from "../helpers/dataFetcher";
import { IconLayer, TextLayer } from "@deck.gl/layers";
import pin from "../assets/pin.png";

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

  const countriesLayer = new IconLayer({
    id: "countries",
    data: countriesData,
    getPosition: (d: { latlng: number[] }) => [d.latlng[1], d.latlng[0]],
    getIcon: () => ({
      url: pin,
      width: 128,
      height: 128,
    }),
    sizeMinPixels: 20,
  });

  const capitalsLayer = new TextLayer({
    id: "capitals",
    data: countriesData,
    getPosition: (d: { capitalInfo: { latlng: number[] } }) =>
      d.capitalInfo.latlng
        ? [d.capitalInfo.latlng[1], d.capitalInfo.latlng[0]]
        : [0, 0],
    getText: (d: { capital: string[] }) => (d.capital ? d.capital[0] : ""),
    getColor: [78, 84, 82],
    getSize: 10,
    getAlignmentBaseline: "center"
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
      <DeckOverlay />
    </Map>
  );
};

export default InteractiveMap;

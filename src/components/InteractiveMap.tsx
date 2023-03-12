import { useEffect, useState } from "react";
import Map, { NavigationControl } from "react-map-gl";
import DeckOverlay from "./DeckOverlay";
import { fetchData } from "../utils/dataFetcher";
import { IconLayer, TextLayer } from "@deck.gl/layers";
import pin from "../assets/pin.png";
import { HoverInfo, Response } from "../interfaces";
import Tooltip from "./Tooltip";

const InteractiveMap = () => {
  const token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  const [mapViewState, setMapViewState] = useState({
    longitude: 50,
    latitude: 0,
    zoom: 1.5,
  });

  const [countriesData, setCountriesData] = useState<Response[]>([]);
  const [hoverInfo, setHoverInfo] = useState<HoverInfo | null>(null);

  useEffect(() => {
    fetchData()
      .then((res) => setCountriesData(res))
      .catch((err) => console.log(err));
  }, []);

  const hoverHandler = ({object, x, y}:any) => {
    if (object) {
      setHoverInfo({
        name: object.name.common,
        latlng: [x, y],
      });
    } else {
      setHoverInfo(null);
    }
  };

  console.log(hoverInfo);

  const countriesLayer = new IconLayer({
    id: "countries",
    pickable: true,
    data: countriesData,
    getPosition: (d: { latlng: number[] }) => [d.latlng[1], d.latlng[0]],
    getSize: () => 8,
    getIcon: () => ({
      url: pin,
      width: 128,
      height: 128,
      anchorY: 128,
    }),
    sizeMinPixels: 20,
    onHover: hoverHandler,
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
    getAlignmentBaseline: "center",
  });

  return (
    <Map
      mapboxAccessToken={token}
      mapStyle="mapbox://styles/szymczyki/clf4gnmia005x01mrdaz1cdx4"
      {...mapViewState}
      onMove={(next) => setMapViewState(next.viewState)}
      style={{ width: "100vw", height: "100vh" }}
      renderWorldCopies={false}
    >
      <NavigationControl />
      <DeckOverlay layers={[capitalsLayer, countriesLayer]} />
      {hoverInfo && (
        <Tooltip
          x={hoverInfo.latlng[0]}
          y={hoverInfo.latlng[1]}
          name={hoverInfo.name}
        />
      )}
    </Map>
  );
};

export default InteractiveMap;

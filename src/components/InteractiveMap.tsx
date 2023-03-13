import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../contexts/ModalContext";
import Map, { NavigationControl } from "react-map-gl";
import DeckOverlay from "./DeckOverlay";
import { IconLayer, TextLayer } from "@deck.gl/layers";
import { fetchData } from "../utils/dataFetcher";
import pin from "../assets/pin.png";
import { Response } from "../interfaces";

const InteractiveMap = () => {
  const token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  const { dispatch } = useContext(ModalContext);

  const [mapViewState, setMapViewState] = useState({
    longitude: 10,
    latitude: 20,
    zoom: 1.5,
  });
  const [countriesData, setCountriesData] = useState<Response[]>([]);

  useEffect(() => {
    fetchData()
      .then((res) => setCountriesData(res))
      .catch((err) => console.log(err));
  }, []);

  const clickHandler = ({ object }: any) => {
    dispatch({
      type: "populateModal",
      visible: true,
      officialName: object.name.official,
      commonName: object.name.common,
      capital: object.capital ? object.capital[0] : "",
      region: object.region,
      area: object.area,
      flag: object.flags.png,
      population: object.population,
    });
  };

  const countriesLayer = new IconLayer({
    id: "countries",
    pickable: true,
    data: countriesData,
    getPosition: (d: { latlng: number[] }) => [d.latlng[1], d.latlng[0]],
    getSize: () => 10,
    getIcon: () => ({
      url: pin,
      width: 128,
      height: 128,
      anchorY: 128,
    }),
    sizeMinPixels: 20,
    onClick: clickHandler,
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
    getSize: 12,
    getAlignmentBaseline: "center",
    characterSet: "auto",
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
      <DeckOverlay
        layers={[countriesLayer, capitalsLayer]}
        getTooltip={({ object }) =>
          object && {
            html: `<h2>${object.name.common}</h2>`,
            style: {
              backgroundColor: "rgba(252, 250, 250,.8)",
              fontSize: "1em",
              color: "black",
              borderRadius: "10px",
            },
          }
        }
      />
    </Map>
  );
};

export default InteractiveMap;

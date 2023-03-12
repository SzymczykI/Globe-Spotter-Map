import { useState } from "react";
import { ModalInfo } from "../interfaces";

const useModalState = () => {
  const [modal, setModal] = useState<ModalInfo>({
    visible: false,
    commonName: "",
    officialName: "",
    capital: "",
    region: "",
    area: 0,
    flag: "",
    population: "",
  });

  return {
    modal,
    closeModalHandler: (...args: any) => {
      setModal((prev) => ({
        ...prev,
        visible: false,
      }));
    },
    populateModalHandler: (object: any) => {
      setModal(() => ({
        visible: true,
        commonName: object.name.official,
        officialName: object.name.common,
        capital: object.capital ? object.capital[0] : "",
        region: object.region,
        area: object.area,
        flag: object.flags.png,
        population: object.population,
      }));
    },
  };
};

export default useModalState;

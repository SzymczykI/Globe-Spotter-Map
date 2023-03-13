import { createContext, Dispatch, useReducer } from "react";
import { DataProviderProps, ModalInfo } from "../interfaces";

export const ModalContext = createContext<{
  modal: ModalInfo;
  dispatch: Dispatch<any>;
}>({
  modal: {
    visible: false,
    commonName: "",
    officialName: "",
    capital: "",
    region: "",
    area: 0,
    flag: "",
    population: "",
  },
  dispatch: () => null,
});

const modalReducer = (
  modal: ModalInfo,
  action: {
    type: any;
    officialName: any;
    commonName: any;
    capital: any;
    region: any;
    area: any;
    flag: any;
    population: any;
  }
) => {
  switch (action.type) {
    case "populateModal":
      return {
        visible: true,
        officialName: action.officialName,
        commonName: action.commonName,
        capital: action.capital,
        region: action.region,
        area: action.area,
        flag: action.flag,
        population: action.population,
      };
    case "closeModal":
      return {
        ...modal,
        visible: false,
      };
    default:
      return modal;
  }
};

export const ModalProvider = ({ children }: DataProviderProps) => {
  const initialState: ModalInfo = {
    visible: false,
    commonName: "",
    officialName: "",
    capital: "",
    region: "",
    area: 0,
    flag: "",
    population: "",
  };

  const [modal, dispatch] = useReducer(modalReducer, initialState);

  return (
    <ModalContext.Provider value={{ modal, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

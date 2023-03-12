import InteractiveMap from "./components/InteractiveMap";
import InfoModal from "./components/InfoModal";
import { ModalInfo } from "./interfaces";
import { useState } from "react";

function App() {
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

  return (
    <>
      <InfoModal modal={modal} setModal={setModal} />
      <InteractiveMap setModal={setModal} />
    </>
  );
}

export default App;

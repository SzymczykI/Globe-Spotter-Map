import InteractiveMap from "./components/InteractiveMap";
import InfoModal from "./components/InfoModal";
import InfoBox from "./components/InfoBox";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
  return (
    <ModalProvider>
      <InfoBox />
      <InfoModal />
      <InteractiveMap />
    </ModalProvider>
  );
}

export default App;

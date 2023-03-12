import { Modal } from "flowbite-react";
import { ModalComponentProps } from "../interfaces";


const InfoModal = ({ modal, setModal }: ModalComponentProps) => {

  const closeModalHandler = () => {
    setModal((prev: any) => ({
      ...prev,
      visible: false,
    }));
  };

  return (
    <Modal
      show={modal.visible}
      onClose={closeModalHandler}
      size="sm"
      className="bg-transparent md:w-5/12"
    >
      <Modal.Header>
        <p className="pl-2 uppercase">{modal.commonName}</p>
      </Modal.Header>
      <Modal.Body>
        <div className="space-y-3 p-6 bg-gray-100">
          <img src={modal.flag} alt="flag" />
          <p className="text-lg">
            <b>Official Name:</b> {modal.officialName}
          </p>
          <p>
            <b>Capital:</b> {modal.capital}
          </p>
          <p>
            <b>Region:</b> {modal.region}
          </p>
          <p>
            <b>Area:</b> {modal.area} km2
          </p>
          <p>
            <b>Population:</b> {modal.population}
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default InfoModal;

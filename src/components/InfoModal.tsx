import { Modal } from "flowbite-react";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

const InfoModal = () => {
  const { modal, dispatch } = useContext(ModalContext);

  const closeModalHandler = () => {
    dispatch({
      type: "closeModal",
    });
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

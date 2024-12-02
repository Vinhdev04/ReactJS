import { useState } from "react";
import "./Modal.scss";
function Modal() {
  // # useState()
  const [showModal, setShowModal] = useState(true);
  // # handleClick() & handleClose()
  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className="btn" onClick={handleClick}>
        Open Modal
      </button>

      {showModal && (
        // # showModal == true -> show modal
        // # showModal == false -> hide modal
        <div className="wrapper__modal">
          <div className="modal">
            <div className="modal__body">
              <button className="modal__btn" onClick={handleClose}>
                X
              </button>
              <h2 className="modal__title">Modal Title</h2>
              <p className="modal__desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias eligendi, aspernatur recusandae quibusdam a culpa
                temporibus doloribus veniam tempore provident blanditiis ratione
                excepturi. Nemo incidunt ratione iste, commodi impedit enim?
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Modal;

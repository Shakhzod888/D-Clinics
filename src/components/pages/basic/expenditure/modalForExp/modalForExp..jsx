import React from "react";

function ModalForExp({ name, showModal, handleToggleModal }) {
  return (
    <div
      className={`modal fade ${showModal ? "show " : ""}  p-2 bg-opacity-50"`}
      id="exampleModalToggle1"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel1"
      tabIndex="-1"
      style={{ display: showModal ? "block" : "none" }}
    >
      <div className="modal-dialog modal-dialog modal-xl modal-dialog-centered ">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn fs-5 btn-outline-danger "
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => handleToggleModal(1)}
            >
              x
            </button>
          </div>

          <div className="modal-dialog-centered shadow basic_4 shadow-lg bg-body d-flex flex-column ">
            <p className="modal-title" id="exampleModalToggleLabel1">
              {name}
            </p>

            <div className="m-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalForExp;

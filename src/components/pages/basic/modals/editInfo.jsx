import React from "react";

function ModalForEdit({
  name,
  nameChoose,
  contract,
  dealer,
  showModal,
  handleToggleModal,
  total,
  taken,
  returned,
  remainder,
  sklad,
  kolijistvo,
  izmereniya,
  vzyatovo,
  status,
}) {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  let UNPACKINGS = Math.floor(Math.random() * 10) + 1;
  return (
    <div
      className={`modal fade ${showModal ? "show " : ""}  p-2  bg-opacity-50"`}
      id="exampleModalToggle1"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel1"
      tabIndex="-1"
      style={{ display: showModal ? "block" : "none" }}
    >
      <div className="modal-dialog  modal-lg  modal-dialog-centered ">
        <div className="modal-content">
          <div className="modal-header">
            <p
              className="modal-title fs-5 text-muted fw-bold"
              id="exampleModalToggleLabel1"
            >
              {name}
            </p>
            <button
              type="button"
              className="btn fs-5  btn-outline-danger close shadow fw-bold "
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => handleToggleModal(1)}
            >
              x
            </button>
          </div>

          <div className="modal-dialog-centered shadow basic_4 shadow-lg bg-body d-flex flex-column ">
            <div className="d-flex gap-5">
              <div className="d-flex flex-column flex-wrap gap-2  m-2">
                <div class="col-md-10">
                  <label for="inputState" class="form-label text-muted fs-20">
                    СКЛАД
                  </label>
                  <select
                    class="form-select text-muted fs-20"
                    aria-label="Disabled select example"
                    disabled
                  >
                    <option selected>{sklad}</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-md-10">
                  <label for="inputState" class="form-label text-muted fs-20">
                    КОЛИЧЕСТВО
                  </label>
                  <select
                    class="form-select text-muted fs-20"
                    aria-label="Disabled select example"
                    disabled
                  >
                    <option selected>{kolijistvo}</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-md-10">
                  <label for="inputState" class="form-label text-muted fs-20">
                    ЕДИНИЦА ИЗМЕРЕНИЯ
                  </label>
                  <select
                    class="form-select text-muted fs-20"
                    aria-label="Disabled select example"
                    disabled
                  >
                    <option selected>{izmereniya}</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-md-10">
                  <label for="inputState" class="form-label text-muted fs-20">
                    ДАТА РЕГИСТРАЦИИ
                  </label>
                  <select
                    class="form-select text-muted fs-20"
                    aria-label="Disabled date example"
                    disabled
                  >
                    <option selected>
                      {day}-{month}-{year}
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="d-flex gap-3 mt-4 justify-content-center align-items-center">
                  <p className="fs-6 m-2 text-muted fs-20">СТАТУС ОПЛАТЫ:</p>
                  <button
                    className={`btn btn-status ${
                      status === "Отдано"
                        ? "btn-success"
                        : status === "Отказано"
                        ? "btn-danger"
                        : "btn-warning"
                    }`}
                  >
                    {status}
                  </button>
                </div>
              </div>
              <div className="d-flex flex-column gap-2 m-2">
                <div class="col-md-10">
                  <label for="inputState" class="form-label text-muted fs-20">
                    Аптека
                  </label>
                  <select
                    class="form-select text-muted fs-20"
                    aria-label="Disabled select example"
                    disabled
                  >
                    <option selected>Стационар</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-md-10">
                  <label for="inputState" class="form-label text-muted fs-20">
                    КОЛИЧЕСТВО ВЗЯТОГО
                  </label>
                  <select
                    class="form-select text-muted fs-20"
                    aria-label="Disabled select example"
                  >
                    <option selected>{vzyatovo}</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-md-10">
                  <label for="inputState" class="form-label text-muted fs-20">
                    ЕДИНИЦА ИЗМЕРЕНИЯ ВЗЯТОГО
                  </label>
                  <select
                    class="form-select text-muted fs-20"
                    aria-label="Disabled select example"
                  >
                    <option selected>{izmereniya}</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>{" "}
                <div class="col-md-10">
                  <label for="inputState" class="form-label text-muted fs-20">
                    ДАТА ВЗЯТИЯ
                  </label>
                  <select
                    class="form-select text-muted fs-20"
                    aria-label="Disabled select example"
                    disabled
                  >
                    <option selected>
                      {day - 2} - {month} - {year}
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-dialog-centered shadow basic_5 shadow-lg bg-body d-flex flex-column ">
            <div className="d-flex gap-4 m-2 ">
              <div class="col-md-10">
                <label for="inputState" class="form-label text-muted fs-20">
                  СКЛАД
                </label>
                <select
                  class="form-select text-muted fs-20"
                  aria-label="Disabled select example"
                  disabled
                >
                  <option selected>{sklad}</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="col-md-10">
                <label for="inputState" class="form-label text-muted fs-20">
                  СКЛАД
                </label>
                <select
                  class="form-select text-muted fs-20"
                  aria-label="Disabled select example"
                  disabled
                >
                  <option selected>{sklad}</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
          <div className="d-flex m-2">
            <button
              type="button"
              className="btn fs-5 btn-cancel shadow  close "
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => handleToggleModal(1)}
            >
              Отмена
            </button>
            <button type="button" className="btn btn-success shadow  close  ">
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalForEdit;

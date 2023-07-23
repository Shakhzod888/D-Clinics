import React from "react";

function ModalForRead({
  //   name,
  //   nameChoose,
  //   contract,
  //   dealer,
  showModal,
  //   handleToggleModal,
  //   total,
  //   taken,
  //   returned,
  //   remainder,
}) {
  //   const date = new Date();
  //   const day = date.getDate();
  //   const month = date.getMonth() + 1;
  //   const year = date.getFullYear();
  //   let UNPACKINGS = Math.floor(Math.random() * 10) + 1;
  return (
    <div
      className={`modal fade ${showModal ? "show " : ""}  p-2  bg-opacity-50"`}
      id="exampleModalToggle1"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel1"
      tabIndex="-1"
      style={{ display: showModal ? "block" : "none" }}
    >
      {/* <div className="modal-dialog  modal-lg  modal-dialog-centered ">
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

          <div className="modal-dialog-centered shadow basic_5 shadow-lg bg-body d-flex flex-column ">
            <div className="d-flex gap-4 m-2 ">
              <div class="col-md-4">
                <label for="inputState" class="form-label text-muted fs-20">
                  КОД ДОКУМЕНТА
                </label>
                <select
                  class="form-select text-muted fs-20"
                  aria-label="Disabled select example"
                  disabled
                >
                  <option selected>{contract}</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="col-md-4">
                <label for="inputState" class="form-label text-muted fs-20">
                  КОД
                </label>
                <select
                  class="form-select text-muted fs-20"
                  aria-label="Disabled select example"
                  disabled
                >
                  <option selected>{contract}</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="col-md-4">
                <label for="inputState" class="form-label text-muted fs-20">
                  ДИЛЕР
                </label>
                <select
                  class="form-select text-muted fs-20"
                  aria-label="Disabled select example"
                  disabled
                >
                  <option className="fs-1" selected>
                    {dealer}
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
          <div className="modal-dialog-centered shadow basic_4 shadow-lg bg-body d-flex flex-column ">
            <div className="d-flex gap-5">
              <div className="d-flex flex-column flex-wrap gap-2  m-2">
                <div class="col-md-10">
                  <label for="inputState" class="form-label text-muted fs-20">
                    МЕДИКАМЕНТ
                  </label>
                  <select
                    class="form-select text-muted fs-20"
                    aria-label="Disabled select example"
                    disabled
                  >
                    <option selected>{nameChoose}</option>
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
                    <option selected>{total}</option>
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
                    <option selected>Капсула</option>
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
                  <button className="btn btn-success">Оплачено</button>
                </div>
              </div>
              <div className="d-flex flex-column gap-2 m-2">
                <div class="col-md-10">
                  <label for="inputState" class="form-label text-muted fs-20">
                    СКЛАД
                  </label>
                  <select
                    class="form-select text-muted fs-20"
                    aria-label="Disabled select example"
                    disabled
                  >
                    <option selected>Главный</option>
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
                    disabled
                  >
                    <option selected>{taken}</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-md-10">
                  <label for="inputState" class="form-label text-muted fs-20">
                    КОЛИЧЕСТВО ВАЗВРАТА
                  </label>
                  <select
                    class="form-select text-muted fs-20"
                    aria-label="Disabled select example"
                    disabled
                  >
                    <option selected>{returned}</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>{" "}
                <div class="col-md-10">
                  <label for="inputState" class="form-label text-muted fs-20">
                    КОЛИЧЕСТВО ОСТАТКА
                  </label>
                  <select
                    class="form-select text-muted fs-20"
                    aria-label="Disabled select example"
                    disabled
                  >
                    <option selected>{remainder}</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-md-10">
                  <label for="inputState" class="form-label text-muted fs-20">
                    КОЛИЧЕСТВО РАСПАКОВКИ
                  </label>
                  <select
                    class="form-select text-muted fs-20"
                    aria-label="Disabled select example"
                    disabled
                  >
                    <option selected>{UNPACKINGS}</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn fs-5 btn-cancel shadow  close "
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={() => handleToggleModal(1)}
          >
            Отмена
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default ModalForRead;

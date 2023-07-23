import React, { useState } from "react";
import Eye from "../assets/eye.png";
import Editor from "../assets/editer.png";
import Lists from "../jsons/list.json";
import Medication from "../jsons/medication.json";

function Prikhot() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const [listNumber, setListNumber] = useState(10);
  const [listMedication, setlistMedication] = useState(3);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal1, setShowModal1] = useState(false);
  const [clickedItemName, setClickedItemName] = useState("");
  const [secsess, setSacsess] = useState("danger");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setListNumber(10);
  };

  const changeState = () => {
    if (secsess) {
      setSacsess("success");
    }
  };

  const filteredLists = Lists.filter((list) =>
    list.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalRecords = filteredLists.length;
  const totalPages = Math.ceil(totalRecords / 10);

  const handlePageChange = (page) => {
    const startIndex = (page - 1) * 10;
    setListNumber(startIndex + 10);
  };

  const handleToggleModal = (modalNumber) => {
    if (modalNumber === 1) {
      setShowModal1(!showModal1);
    }
  };

  function Modal({ name, showModal, handleToggleModal }) {
    return (
      <div
        className={`modal fade ${
          showModal ? "show " : ""
        }  p-2  bg-opacity-50"`}
        id="exampleModalToggle1"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel1"
        tabIndex="-1"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog  modal-lg  modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <p className="modal-title" id="exampleModalToggleLabel1">
                {name}
              </p>
              <button
                type="button"
                className="btn fs-5  shadow fw-bold  danger"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => handleToggleModal(1)}
              >
                x
              </button>
            </div>

            <div className="modal-dialog-centered shadow basic_5 shadow-lg bg-body d-flex flex-column ">
              <div className="d-flex m-4 gap-2 bg-body">
                <div class="col-md-4">
                  <label for="inputState" class="form-label">
                    State
                  </label>
                  <select
                    class="form-select"
                    aria-label="Disabled select example"
                    disabled
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label for="inputState" class="form-label">
                    State
                  </label>
                  <select
                    class="form-select"
                    aria-label="Disabled select example"
                    disabled
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label for="inputState" class="form-label">
                    State
                  </label>
                  <select
                    class="form-select"
                    aria-label="Disabled select example"
                    disabled
                  >
                    <option selected>Open this select menu</option>
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
                    <label for="inputState" class="form-label">
                      Stateee
                    </label>
                    <select
                      class="form-select"
                      aria-label="Disabled select example"
                      disabled
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="col-md-10">
                    <label for="inputState" class="form-label">
                      State
                    </label>
                    <select
                      class="form-select"
                      aria-label="Disabled select example"
                      disabled
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="col-md-10">
                    <label for="inputState" class="form-label">
                      Statee
                    </label>
                    <select
                      class="form-select"
                      aria-label="Disabled select example"
                      disabled
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="col-md-10">
                    <label for="inputState" class="form-label">
                      State
                    </label>
                    <select
                      class="form-select"
                      aria-label="Disabled select example"
                      disabled
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="d-flex gap-3 mt-4 justify-content-center align-items-center">
                    <p className="fs-6 m-2">СТАТУС ОПЛАТЫ:</p>
                    <button className="btn btn-success">Оплачено</button>
                  </div>
                </div>
                <div className="d-flex flex-column gap-2 m-2">
                  <div class="col-md-10">
                    <label for="inputState" class="form-label">
                      State
                    </label>
                    <select
                      class="form-select"
                      aria-label="Disabled select example"
                      disabled
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="col-md-10">
                    <label for="inputState" class="form-label">
                      State
                    </label>
                    <select
                      class="form-select"
                      aria-label="Disabled select example"
                      disabled
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="col-md-10">
                    <label for="inputState" class="form-label">
                      State
                    </label>
                    <select
                      class="form-select"
                      aria-label="Disabled select example"
                      disabled
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>{" "}
                  <div class="col-md-10">
                    <label for="inputState" class="form-label">
                      State
                    </label>
                    <select
                      class="form-select"
                      aria-label="Disabled select example"
                      disabled
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="col-md-10">
                    <label for="inputState" class="form-label">
                      State
                    </label>
                    <select
                      class="form-select"
                      aria-label="Disabled select example"
                      disabled
                    >
                      <option selected>Open this select menu</option>
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
              className="btn fs-5 btn-cancel shadow  close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => handleToggleModal(1)}
            >
              Отмена
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="shadow basic_2 shadow-lg bg-body rounded ">
        <h3 className="text-center p-3 text-list">
          Список оприходованных медикаментов
        </h3>
        <div className="border border-right-0 p-3 pb-5 mt-5">
          <p>Фильтр</p>
          <div className="d-flex flex-wrap gap-5">
            <div className="col-md-1.5">
              <label htmlFor="inputState" className="form-label "></label>
              <select id="inputState" className="form-select sell ">
                <option defaultValue>Все препараты</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-1.5">
              <label htmlFor="inputState" className="form-label "></label>
              <select id="inputState" className="form-select sell ">
                <option defaultValue>Все склады</option>
                <option>...</option>
              </select>
            </div>

            <div className="col-md-1.5">
              <label htmlFor="inputState" className="form-label "></label>
              <select id="inputState" className="form-select sell ">
                <option defaultValue>Все дилеры</option>
                <option>...</option>
              </select>
            </div>

            <div className="col-md-2">
              <label htmlFor="inputState" className="form-label"></label>
              <select id="inputState" className="form-select">
                <option defaultValue>Все единицы измерения</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-1.5">
              <label htmlFor="inputState" className="form-label"></label>
              <select id="inputState" className="form-select">
                <option defaultValue>Все статусы</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-1.5">
              <label htmlFor="inputState" className="form-label"></label>
              <select id="inputState" className="form-select">
                <option defaultValue>Все контракты</option>
                <option>...</option>
              </select>
            </div>
          </div>
        </div>
        <div className="ddl d-flex justify-content-between align-items-center ">
          <div className="d-flex justify-content-center gap-3 align-items-center flex-wrap">
            <p className="align-items-center">Показать записи</p>
            <input
              className="number"
              id="number"
              type="number"
              value={listNumber}
              onChange={(e) => setListNumber(parseInt(e.target.value))}
            />
          </div>
          <div className="d-flex  gap-5 ">
            <input
              type="text"
              className="form-control"
              placeholder="Поиск по НАИМЕНОВАНИЕ"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="btn shadow btn-primary ">Экспорт</button>
            <button className="btn shadow btn-primary w-100">
              + Добавить приход
            </button>
          </div>
        </div>
        <div className="mt-5 p-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th className="p-2 bg-secondary text-white" scope="col">
                  N
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  НАИМЕНОВАНИЕ
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  ДИЛЕР
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  ДОГОВОР
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  ЕД. ИЗМЕРЕНИЯ
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  КОЛИЧ.
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  КОЛ. ВЗЯТОГО
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  КОЛ. ОСТАТОК
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  КОЛ. ВОЗВРАТА
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  ДАТА
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  ДЕЙСТВИЕ
                </th>
              </tr>
            </thead>
            <tbody>
              {Lists.slice(0, listNumber).map((list, index) => (
                <tr key={list.id}>
                  <th scope="row">{index + 1}</th>
                  <td
                    onClick={() => {
                      setClickedItemName(list.name);
                      handleToggleModal(1);
                    }}
                    className="text-primary cursore"
                  >
                    {list.name}
                  </td>
                  <td className="text-primary">{list.dealer}</td>
                  <td className="text-primary">{list.contract}</td>
                  <td>{list.ed_measurements}</td>
                  <td>{list.quantity}</td>
                  <td>{list.qty_taken}</td>
                  <td>{list.qty_remainder}</td>
                  <td>{list.qty_return}</td>
                  <td>
                    {day}.{month}.{year}
                  </td>
                  <td
                    onClick={() => {
                      setClickedItemName(list.name);
                      handleToggleModal(1);
                    }}
                  >
                    <img className="cursore" src={Eye} alt="" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className=" ">
            <nav
              aria-label="..."
              className="d-flex flex-wrap justify-content-around align-items-center"
            >
              <p>
                Показано от 1 до {listNumber} из {Lists.length} записей
              </p>
              <ul className="pagination d-flex gap-3">
                <li
                  className={`page-item  ${
                    listNumber === 10 ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() =>
                      handlePageChange(Math.ceil(listNumber / 10) - 1)
                    }
                  >
                    Предыдущий
                  </button>
                </li>
                {[...Array(totalPages)].map((_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      listNumber > index * 10 && listNumber <= (index + 1) * 10
                        ? "active"
                        : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    listNumber === totalRecords ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() =>
                      handlePageChange(Math.ceil(listNumber / 10) + 1)
                    }
                  >
                    Следующий
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <Modal
            name={`Медикамент : ${clickedItemName}`}
            showModal={showModal1}
            handleToggleModal={() => handleToggleModal(1)}
          />
        </div>
      </div>
    </>
  );
}

export default Prikhot;

import React, { useState } from "react";

import Eye from "../assets/eye.png";
import Editor from "../assets/editer.png";
import Lists from "../jsons/list.json";
import Medication from "../jsons/medication.json";

function ExpenditureTab() {
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

  return (
    <>
      <div className="shadow basic_2 shadow-lg bg-body rounded ">
        <h3 className="text-center p-3 text-list">
          Список выданных медикаментов
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
        <div className="m-4">
          <table className="table  table-bordered">
            <thead>
              <tr>
                <th className="p-2 bg-secondary text-white p-4" scope="col">
                  N
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  ДОКУМЕНТ
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  КОЛИЧ.
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  ИЗМЕРЕНИЯ
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  СКЛАД
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  ВЗЯТ.
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  ИЗМ.ВЗЯТ.
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  КОДРАСП.
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  СТАТУС РАСП.
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  КОД.СП.М.
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
              {Medication.slice(0, listNumber).map((list, index) => (
                <tr key={list.id}>
                  <th scope="row">{index + 1}</th>
                  <td
                    onClick={() => {
                      setClickedItemName(list.name);
                      handleToggleModal(1);
                    }}
                    className="text-primary"
                  >
                    {list.document}
                  </td>
                  <td className="text-primary">{list.document}</td>
                  <td className="text-primary">{list.quantity}</td>
                  <td>{list.ed_measurements}</td>
                  <td>{list.stock}</td>
                  <td>{list.qty_taken}</td>
                  <td>{list["ed. meas. taken"]}</td>
                  <td>
                    <button
                      className={`btn btn-${secsess}`}
                      onClick={changeState}
                    >
                      {list["dist. status"]}
                    </button>
                  </td>
                  <td>{list["code sp. m."]}</td>
                  <td>
                    {day}.{month}.{year}
                  </td>
                  <td className="d-flex gap-3 p-3">
                    <img
                      onClick={() => {
                        setClickedItemName(list.name);
                        handleToggleModal(1);
                      }}
                      src={Eye}
                      alt=""
                    />
                    <img src={Editor} alt="" />
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

export default ExpenditureTab;

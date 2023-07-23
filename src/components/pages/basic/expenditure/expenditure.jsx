import React, { useState } from "react";

import Eye from "../assets/eye.png";
import Editor from "../assets/editer.png";
import Lists from "../jsons/listExpenditure.json";
import Medication from "../jsons/medication.json";

import ExportImg from "../assets/export.png";
import ModalForExp from "./modalForExp/modalForExp.";
import ModalForPrikhot from "../clinicsArrival/modalForPrikhot/modalForPrikhot";
import ModalForRead from "../modals/modalForRead";

function ExpenditureTab() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const [listNumber, setListNumber] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal1, setShowModal1] = useState(false);
  const [clickedItemName, setClickedItemName] = useState("");
  const [secsess, setSacsess] = useState("danger");
  const [clickedId, setClickedId] = useState("");

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

  console.log(clickedId);

  return (
    <>
      <div className="shadow basic_2 shadow-lg bg-body rounded ">
        <h3 className="text-center p-3 text-list text-muted fs-4">
          Список выданных медикаментов
        </h3>
        <div className="border border-right-0 p-3 pb-5 mt-5">
          <p className="text-muted fs-5">Фильтр</p>
          <div className="d-flex flex-wrap gap-5">
            <div className="col-md-1.5">
              <label htmlFor="inputState" className="form-label "></label>
              <select id="inputState" className="form-select sell text-muted">
                <option defaultValue>Все препараты</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-1.5">
              <label htmlFor="inputState" className="form-label "></label>
              <select id="inputState" className="form-select sell text-muted">
                <option defaultValue>Все склады</option>
                <option>...</option>
              </select>
            </div>

            <div className="col-md-1.5">
              <label htmlFor="inputState" className="form-label "></label>
              <select id="inputState" className="form-select sell text-muted">
                <option defaultValue>Все дилеры</option>
                <option>...</option>
              </select>
            </div>

            <div className="col-md-2">
              <label htmlFor="inputState" className="form-label"></label>
              <select id="inputState " className="form-select text-muted">
                <option defaultValue>Все единицы измерения</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-1.5">
              <label htmlFor="inputState" className="form-label"></label>
              <select id="inputState" className="form-select text-muted">
                <option defaultValue>Все статусы</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-1.5">
              <label htmlFor="inputState" className="form-label"></label>
              <select id="inputState" className="form-select text-muted">
                <option defaultValue>Все контракты</option>
                <option>...</option>
              </select>
            </div>
          </div>
        </div>
        <div className="ddl d-flex justify-content-between align-items-center ">
          <div className="d-flex justify-content-center gap-3 align-items-center flex-wrap">
            <p className="align-items-center text-muted">Показать записи</p>
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
              placeholder="Поиск"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="btn shadow btn-ex d-flex gap-3">
              <img className="category_imges" src={ExportImg} alt="" />
              Экспорт
            </button>
          </div>
        </div>
        <div className="m-4">
          <table className="table  table-bordered ">
            <thead>
              <tr>
                <th className="p-2 bg-main text-white" scope="col">
                  №
                </th>
                <th className="p-2 bg-main text-white" scope="col">
                  НАИМЕНОВАНИЕ
                </th>
                <th className="p-2 bg-main text-white" scope="col">
                  Склад
                </th>
                <th className="p-2 bg-main text-white" scope="col">
                  Аптека
                </th>
                <th className="p-2 bg-main text-white" scope="col">
                  ЕД. ИЗМЕРЕНИЯ
                </th>
                <th className="p-2 bg-main text-white" scope="col">
                  КОЛИЧЕСТВО
                </th>
                <th className="p-2 bg-main text-white" scope="col">
                  КОЛ. ВЗЯТОГО
                </th>
                <th className="p-2 bg-main text-white" scope="col">
                  ОБ ОСТАТОК
                </th>
                <th className="p-2 bg-main text-white" scope="col">
                  СТАТУС
                </th>
                <th className="p-2 bg-main text-white" scope="col">
                  ДАТА
                </th>
                <th className="p-2 bg-main text-white" scope="col">
                  ДЕЙСТВИЕ
                </th>
              </tr>
            </thead>
            <tbody>
              {Lists.slice(0, listNumber).map((list, index) => (
                <tr key={list.id}>
                  <th className="df-text" scope="row">
                    {index + 1}
                  </th>
                  <td
                    onClick={() => {
                      setClickedItemName(list.name);
                      setClickedId(list.apteka);
                      handleToggleModal(1);
                    }}
                    className="text-primary "
                  >
                    {list.name}
                  </td>
                  <td className="text-primary">{list.sklad}</td>
                  <td className="text-primary">{list.apteka}</td>
                  <td className="df-text">{list.izmereniya}</td>
                  <td className="df-text">{list.kolichestvo}</td>
                  <td className="df-text">{list.vzyatovo}</td>
                  <td className="df-text">{list.obstatok}</td>
                  <td>
                    <button
                      className={`btn btn-status ${
                        list.status === "Отдано"
                          ? "btn-success"
                          : list.status === "Отказано"
                          ? "btn-danger"
                          : "btn-warning"
                      }`}
                    >
                      {list.status}
                    </button>
                  </td>
                  <td>
                    {day}.{month}.{year}
                  </td>
                  <td className="d-flex gap-3 p-3">
                    <img
                      onClick={() => {
                        console.log("cliked");
                        // <ModalForRead showModal={showModal1} />;
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
              <p className="text-muted">
                Показано от 1 до {listNumber} из {Lists.length} записей
              </p>
              <ul className="pagination d-flex gap-3">
                <li
                  className={`page-item  ${
                    listNumber === 10 ? "disabled" : ""
                  }`}
                >
                  <button
                    className="btn btn-next"
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
                    className="btn btn-next "
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
          <ModalForExp
            name={`Медикамент : ${clickedItemName}`}
            showModal={showModal1}
            handleToggleModal={() => handleToggleModal(1)}
            clickedId={clickedId}
          />
        </div>
      </div>
    </>
  );
}

export default ExpenditureTab;

import React, { useState } from "react";
import Lists from "../modalForExp/modalExp.json";
import Eye from "../assets/eye.png";
import Editor from "../assets/editer.png";
function ModalForExp({ name, showModal, handleToggleModal, clickedId }) {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const [listNumber, setListNumber] = useState(3);
  const [searchQuery, setSearchQuery] = useState("");
  const [clickedItemName, setClickedItemName] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setListNumber(10);
  };
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
              className="btn fs-5 btn-outline-danger ml-auto"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => handleToggleModal(1)}
            >
              x
            </button>
          </div>

          <div className="modal-dialog-centered shadow basic_8 shadow-lg bg-body">
            <div className="m-4">
              <p className="text-center text-list text-muted fs-5">{name}</p>
              <div className="d-flex flex-column">
                <p className="text-muted fs-5 ">Фильтр</p>
                <div className="d-flex flex-wrap gap-5">
                  <div className="col-md-1.5">
                    <label htmlFor="inputState" className="form-label "></label>
                    <select
                      id="inputState"
                      className="form-select sell text-muted"
                    >
                      <option defaultValue>Все препараты</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="col-md-1.5">
                    <label htmlFor="inputState" className="form-label "></label>
                    <select
                      id="inputState"
                      className="form-select sell text-muted"
                    >
                      <option defaultValue>Все склады</option>
                      <option>...</option>
                    </select>
                  </div>

                  <div className="col-md-1.5">
                    <label htmlFor="inputState" className="form-label "></label>
                    <select
                      id="inputState"
                      className="form-select sell text-muted"
                    >
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
                </div>
                <div className="ddl d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-center gap-3 align-items-center flex-wrap">
                    <p className="align-items-center text-muted">
                      Показать записи
                    </p>
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
                      Экспорт
                    </button>
                  </div>
                </div>
                <table className="table  table-bordered mt-4 ">
                  <thead className="">
                    <tr className="d-lex flex-column flew-wrap">
                      <th className="p-2 bg-main text-white" scope="col">
                        №
                      </th>
                      <th className="p-2 bg-main text-white" scope="col">
                        ДОКУМЕНТ
                      </th>
                      <th className="p-2 bg-main text-white" scope="col">
                        КОЛИЧ.
                      </th>
                      <th className="p-2 bg-main text-white" scope="col">
                        ЕД. ИЗМЕРЕНИЯ
                      </th>
                      <th className="p-2 bg-main text-white" scope="col">
                        СКЛАД
                      </th>
                      <th className="p-2 bg-main text-white" scope="col">
                        КОЛ. ВЗЯТ.
                      </th>
                      <th className="p-2 bg-main text-white" scope="col">
                        ЕД. ВЗЯТ.
                      </th>
                      <th className="p-2 bg-main text-white" scope="col">
                        КОД РАСП.
                      </th>
                      <th className="p-2 bg-main text-white" scope="col">
                        СТАТУС РАСП.
                      </th>
                      <th className="p-2 bg-main text-white" scope="col">
                        КОД СП. М.
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
                            handleToggleModal(1);
                          }}
                          className="text-primary "
                        >
                          {clickedId}
                        </td>
                        <td className="text-primary">{list.kolich}</td>
                        <td className="text-primary">{list.izmereniya}</td>
                        <td className="df-text">{list.sklad}</td>
                        <td className="df-text">{list.kol_vzyat}</td>
                        <td className="df-text">{list.izm_vzyat}</td>
                        <td className="df-text">{list.kod_rasp}</td>
                        <td className="df-text">{list.kod_rasp_m}</td>
                        <td>
                          <button
                            className={`btn btn-status ${
                              list.status === "Отдано"
                                ? "btn-success"
                                : list.status === "Отказано"
                                ? "btn-danger"
                                : ""
                            }`}
                          >
                            {list.status}
                          </button>
                        </td>
                        <td>
                          {day}.{month}.{year}
                        </td>
                        <td className="d-flex gap-3 p-3">
                          <img src={Eye} alt="" />
                          <img src={Editor} alt="" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalForExp;

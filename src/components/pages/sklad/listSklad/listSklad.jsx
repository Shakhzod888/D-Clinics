import React, { useState, useEffect } from "react";
import Eye from "../assets/eye.png";
import Lists from "../jsons/list.json";
import ExportImg from "../assets/export.png";
import Sklad from "../sklad";

function ListSklad() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const [listNumber, setListNumber] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal1, setShowModal1] = useState(false);
  const [data, setData] = useState([]);
  const [showSklad, setShowSklad] = useState(false);
  const [skladName, setSkladName] = useState("");
  const [skladId, setSkladId] = useState("");
  const [skladRoom, setSkladRoom] = useState("");
  const [skladManager, setSkladManager] = useState("");
  useEffect(() => {
    setData(Lists);
  }, []);

  const handleClick = () => {
    setShowSklad(true);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setListNumber(10);
  };

  const filteredLists = data.filter((list) =>
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

  return (
    <>
      {showSklad ? (
        <Sklad
          skladName={skladName}
          skladId={skladId}
          skladRoom={skladRoom}
          skladManager={skladManager}
        />
      ) : (
        <>
          <div className="shadow basic_2 shadow-lg bg-body rounded ">
            <h3 className="text-center p-3 text-list text-muted fs-4">
              Список оприходованных медикаментов
            </h3>
            <div className=" pb-5 "></div>
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
                <button className="btn shadow btn-primary w-100 btn-main">
                  + Добавить приход
                </button>
              </div>
            </div>
            <div className="mt-5 p-3">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="p-2 bg-main text-white" scope="col">
                      №
                    </th>
                    <th className="p-2 bg-main text-white" scope="col">
                      НАИМЕНОВАНИЕ
                    </th>

                    <th className="p-2 bg-main text-white" scope="col">
                      СОТРУДНИКИ
                    </th>
                    <th className="p-2 bg-main text-white" scope="col">
                      ЭТАЖ / КОМНАТА
                    </th>
                    <th className="p-2 bg-main text-white" scope="col">
                      ДЕЙСТВИЕ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLists.slice(0, listNumber).map((list, index) => (
                    <tr key={list.id}>
                      <th scope="row">{index + 1}</th>
                      <td
                        className="text-primary cursore"
                        onClick={() => {
                          handleClick();
                          setShowSklad(true);
                          setSkladName(list.name);
                          setSkladId(list.contract);
                          setSkladRoom(list.room);
                          setSkladManager(list.dealer);
                        }}
                      >
                        {list.name}
                      </td>
                      <td className="text-primary">{list.dealer}</td>
                      <td className="text-primary">{`${list.contract} Этаж ${list.room} Комната`}</td>

                      <td>
                        <img
                          className="cursore"
                          onClick={() => {
                            handleClick();
                            setShowSklad(true);
                            setSkladName(list.name);
                            setSkladId(list.contract);
                            setSkladRoom(list.room);
                            setSkladManager(list.dealer);
                          }}
                          src={Eye}
                          alt=""
                        />
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
                  <p className="text-muted ">
                    Показано от 1 до {listNumber} из {totalRecords} записей
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
                          listNumber > index * 10 &&
                          listNumber <= (index + 1) * 10
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
                        className="btn btn-next"
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
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ListSklad;

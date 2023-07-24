import React, { useState } from "react";
import ExportImg from "../assets/export.png";
import Lists from "../jsons/medication.json";
import Eye from "../assets/eye.png";
function SkladMedicoment() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const [listNumber, setListNumber] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal1, setShowModal1] = useState(false);

  const [data, setData] = useState([]);
  let UNPACKINGS = Math.floor(Math.random() * 10) + 1;
  React.useEffect(() => {
    setData(Lists);
  }, []);

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
      <div className="shadow basic_2 shadow-lg bg-body rounded ">
        <h3 className="text-center p-3 text-list text-muted fs-4">
          Список оприходованных медикаментов
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
                  ДИЛЕР
                </th>
                <th className="p-2 bg-main text-white" scope="col">
                  ДОГОВОР
                </th>
                <th className="p-2 bg-main text-white" scope="col">
                  ЕД. ИЗМЕРЕНИЯ
                </th>
                <th className="p-2 bg-main text-white" scope="col">
                  КОЛИЧ.
                </th>
                <th className="p-2 bg-main text-white" scope="col">
                  КОЛ. ВЗЯТОГО
                </th>
                <th className="p-2 bg-main text-white" scope="col">
                  КОЛ. ОСТАТОК
                </th>
                <th className="p-2 bg-main text-white" scope="col">
                  КОЛ. ВОЗВРАТА
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
              {filteredLists.slice(0, listNumber).map((list, index) => (
                <tr key={list.id}>
                  <th scope="row">{index + 1}</th>
                  <td className="text-primary cursore">{list.name}</td>
                  <td className="text-primary">{list.dealer}</td>
                  <td className="text-primary">{list.contract}</td>
                  <td className="df-text">{list.ed_measurements}</td>
                  <td className="df-text">{list.quantity}</td>
                  <td className="df-text">{list.qty_taken}</td>
                  <td className="df-text">{list.qty_remainder}</td>
                  <td className="df-text">{list.qty_return}</td>
                  <td className="df-text">
                    {day}.{month}.{year}
                  </td>
                  <td>
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
              <p className="text-muted ">
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
  );
}

export default SkladMedicoment;

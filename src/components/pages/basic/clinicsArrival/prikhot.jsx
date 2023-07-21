import React from "react";
import Eye from "../assets/eye.png";
import Lists from "../list.json";

function Prikhot() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const [listNumber, setListNumber] = React.useState(10);

  return (
    <>
      <div className="shadow basic_2 shadow-lg bg-body rounded">
        <h3 className="text-center p-3 text-list">
          Список оприходованных медикаментов
        </h3>
        <div className="border border-right-0 p-3 pb-5 mt-5">
          <p>Фильтр</p>
          <div className="d-flex flex-wrap gap-5">
            <div className="col-md-1.5">
              <label for="inputState" className="form-label "></label>
              <select id="inputState" className="form-select sell ">
                <option selected>Все препараты</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-1.5">
              <label for="inputState" className="form-label "></label>
              <select id="inputState" className="form-select sell ">
                <option selected>Все склады</option>
                <option>...</option>
              </select>
            </div>

            <div className="col-md-1.5">
              <label for="inputState" className="form-label "></label>
              <select id="inputState" className="form-select sell ">
                <option selected>Все дилеры</option>
                <option>...</option>
              </select>
            </div>

            <div className="col-md-2">
              <label for="inputState" className="form-label"></label>
              <select id="inputState" className="form-select">
                <option selected>Все единицы измерения</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-1.5">
              <label for="inputState" className="form-label"></label>
              <select id="inputState" className="form-select">
                <option selected>Все статусы</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-1.5">
              <label for="inputState" className="form-label"></label>
              <select id="inputState" className="form-select">
                <option selected>Все  контракты</option>
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
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="mt-5">
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
                  ДЕЙСТВИЕ
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  ДЕЙСТВИЕ
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  ДЕЙСТВИЕ
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  ДЕЙСТВИЕ
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  ДЕЙСТВИЕ
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  ДЕЙСТВИЕ
                </th>
                <th className="p-2 bg-secondary text-white" scope="col">
                  ДЕЙСТВИЕ
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
                  <td className="text-primary">{list.name}</td>
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
                  <td>
                    <img src={Eye} alt="" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Prikhot;

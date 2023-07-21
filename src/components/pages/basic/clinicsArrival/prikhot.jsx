import React from "react";

function Prikhot() {
  return (
    <>
      <div className="shadow basic_2 shadow-lg bg-body rounded">
        <h3 className="text-center p-3 text-list">
          Список оприходованных медикаментов
        </h3>

        <p>Фильтр</p>
        <div className="d-flex flex-wrap pt-1 gap-5">
          <div className="col-md-1">
            <label for="inputState" className="form-label"></label>
            <select id="inputState" className="form-select sell ">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-1">
            <label for="inputState" className="form-label"></label>
            <select id="inputState" className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-1">
            <label for="inputState" className="form-label"></label>
            <select id="inputState" className="form-select ">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-2">
            <label for="inputState" className="form-label"></label>
            <select id="inputState" className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-1">
            <label for="inputState" className="form-label"></label>
            <select id="inputState" className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-1">
            <label for="inputState" className="form-label"></label>
            <select id="inputState" className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prikhot;

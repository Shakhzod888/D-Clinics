import React, { useState } from "react";
import SkladPrikhot from "./skladPrighot/skladPrikhot";
import SkladMedicoment from "./skladMedicoment/skladMedicoment";
import Rashod from "./skladRashod/rashod";
import ListSklad from "./listSklad/listSklad";

function Sklad({ skladName, skladId, skladRoom, skladManager }) {
  const [activeTab, setActiveTab] = useState("pills-home");
  const [showListSklad, setShowListSklad] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleClick = () => {
    setShowListSklad(true);
  };

  return (
    <>
      {showListSklad ? (
        <ListSklad />
      ) : (
        <>
          <div className="shadow basic shadow-lg bg-body rounded">
            <div>
              <h3 className="text-center p-3 text-list text-muted fs-4">
                Склад : {skladName}
              </h3>
              <button
                onClick={() => {
                  handleClick();
                }}
                className="btn btn-outline-danger shadow fw-500"
              >
                X
              </button>
            </div>

            <div className="d-flex gap-5 p-2 sklad">
              <div className="d-flex gap-3">
                <div>
                  <p className="text-muted fs-6"> Наименование : </p>
                  <p className="text-muted fs-6"> Сотрудники : </p>
                </div>
                <div>
                  <p className="text-muted fs-6"> {skladName} </p>
                  <p className="text-muted fs-6">{skladManager}</p>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-muted fs-6"> Этаж : {skladId}</p>
                  <p className="text-muted fs-6">Комната : {skladRoom}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="shadow basic shadow-lg bg-body rounded">
            <ul
              className="nav tips d-flex nav-pills mb-3 justify-content-start"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className={`btn ${
                    activeTab === "pills-home" ? "btn-main " : "paginator"
                  }`}
                  onClick={() => handleTabClick("pills-home")}
                >
                  Приход
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`btn ${
                    activeTab === "pills-stock" ? "btn-main" : "paginator"
                  }`}
                  onClick={() => handleTabClick("pills-stock")}
                >
                  Расход
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`btn ${
                    activeTab === "pills-med" ? "btn-main" : "paginator"
                  }`}
                  onClick={() => handleTabClick("pills-med")}
                >
                  Медикаменты
                </button>
              </li>
            </ul>

            <div className="tab-content" id="pills-tabContent">
              <div
                className={`tab-pane fade ${
                  activeTab === "pills-home" ? "show active" : ""
                }`}
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <SkladPrikhot />
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === "pills-stock" ? "show active" : ""
                }`}
                id="pills-stock"
                role="tabpanel"
                aria-labelledby="pills-stock-tab"
              >
                <Rashod />
              </div>

              <div
                className={`tab-pane fade ${
                  activeTab === "pills-med" ? "show active" : ""
                }`}
                id="pills-med"
                role="tabpanel"
                aria-labelledby="pills-med-tab"
              >
                <SkladMedicoment />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Sklad;

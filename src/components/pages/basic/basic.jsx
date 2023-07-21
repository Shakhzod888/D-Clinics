import React, { useState } from "react";
import Expenditure from "./expenditure/expenditure";
import Prikhot from "./clinicsArrival/prikhot";

function Basic() {
  const [activeTab, setActiveTab] = useState("pills-home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="shadow basic shadow-lg bg-body rounded">
      <ul
        className="nav tips d-flex nav-pills mb-3 justify-content-start "
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className={`btn ${activeTab === "pills-home" ? "btn-main" : ""}`}
            onClick={() => handleTabClick("pills-home")}
          >
            Приход
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`btn ${activeTab === "pills-stock" ? "btn-main" : ""}`}
            onClick={() => handleTabClick("pills-stock")}
          >
            Расход
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
          <Prikhot />
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "pills-stock" ? "show active" : ""
          }`}
          id="pills-stock"
          role="tabpanel"
          aria-labelledby="pills-stock-tab"
        >
          <Expenditure />
        </div>
      </div>
    </div>
  );
}

export default Basic;

import React, { useState } from "react";

function Basic() {
  const [activeTab, setActiveTab] = useState("pills-home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="shadow basic shadow-lg bg-body rounded">
      <ul
        className="nav categories nav-pills mb-3"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link  ${
              activeTab === "pills-home" ? "active shadow  " : ""
            }`}
            onClick={() => handleTabClick("pills-home")}
          >
            Приход
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              activeTab === "pills-stock" ? "active shadow" : ""
            }`}
            onClick={() => handleTabClick("pills-stock")}
          >
            Расход
          </button>
        </li>
      </ul>
      <button className="btn btn-primary">Button test</button>
      <div className="tab-content" id="pills-tabContent">
        <div
          className={`tab-pane fade ${
            activeTab === "pills-home" ? "show active" : ""
          }`}
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          ..basic
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "pills-stock" ? "show active" : ""
          }`}
          id="pills-stock"
          role="tabpanel"
          aria-labelledby="pills-stock-tab"
        >
          ... Склады ...
        </div>
      </div>
    </div>
  );
}

export default Basic;

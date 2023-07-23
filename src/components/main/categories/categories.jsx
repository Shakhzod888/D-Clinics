import React, { useState } from "react";
import "../categories/categories.scss";
import Basic from "../../pages/basic/basic";

import BasicImg from "../mainBody/assets/main.png";
import SkladImg from "../mainBody/assets/sklad.png";
import Med from "../mainBody/assets/medi.png";
import File from "../mainBody/assets/file.png";
import Dilers from "../mainBody/assets/dilers.png";
import Progress from "../mainBody/assets/progress.png";

function Categories() {
  const [activeTab, setActiveTab] = useState("pills-home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <ul
        className="nav categories nav-pills mb-3"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className={`btn ${
              activeTab === "pills-home" ? "btn-main" : ""
            } d-flex gap-2 `}
            onClick={() => handleTabClick("pills-home")}
          >
            <img className="category_imges" src={BasicImg} alt="" />
            <span className="fw-500">Главная</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`btn ${
              activeTab === "pills-stock" ? "btn-main" : ""
            } d-flex gap-2 `}
            onClick={() => handleTabClick("pills-stock")}
          >
            <img className="category_imges" src={SkladImg} alt="" />
            <span className="fw-500">Склады</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`btn ${
              activeTab === "pills-pharmacy" ? "btn-main" : ""
            } d-flex gap-2`}
            onClick={() => handleTabClick("pills-pharmacy")}
          >
            <img className="category_imges" src={Med} alt="" />
            <span className="fw-500">Аптеки</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`btn ${
              activeTab === "pills-documentation" ? "btn-main" : ""
            } d-flex gap-2 `}
            onClick={() => handleTabClick("pills-documentation")}
          >
            <img className="category_imges" src={File} alt="" />
            <span className="fw-500">Документы</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`btn ${
              activeTab === "pills-dealers" ? "btn-main" : ""
            } d-flex gap-2`}
            onClick={() => handleTabClick("pills-dealers")}
          >
            <img className="category_imges" src={Dilers} alt="" />
            <span className="fw-500">Дилеры</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`btn ${
              activeTab === "pills-statistics" ? "btn-main" : ""
            } d-flex gap-2`}
            onClick={() => handleTabClick("pills-statistics")}
          >
            <img className="category_imges" src={Progress} alt="" />
            <span className="fw-500">Статистика</span>
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
          <Basic />
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
        <div
          className={`tab-pane fade ${
            activeTab === "pills-pharmacy" ? "show active" : ""
          }`}
          id="pills-pharmacy"
          role="tabpanel"
          aria-labelledby="pills-pharmacy-tab"
        >
          ... Аптеки ...
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "pills-documentation" ? "show active" : ""
          }`}
          id="pills-documentation"
          role="tabpanel"
          aria-labelledby="pills-documentation-tab"
        >
          ... Документы ...
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "pills-dealers" ? "show active" : ""
          }`}
          id="pills-dealers"
          role="tabpanel"
          aria-labelledby="pills-dealers-tab"
        >
          ... Дилеры ...
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "pills-statistics" ? "show active" : ""
          }`}
          id="pills-statistics"
          role="tabpanel"
          aria-labelledby="pills-statistics-tab"
        >
          ... Статистика ...
        </div>
      </div>
    </>
  );
}

export default Categories;

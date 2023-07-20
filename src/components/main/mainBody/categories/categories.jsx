import React, { useState } from "react";
import Category_1 from "../assets/category_1.png";
import "../categories/categories.scss";
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
            className={`nav-link ${activeTab === "pills-home" ? "active" : ""}`}
            onClick={() => handleTabClick("pills-home")}
          >
            Главная
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              activeTab === "pills-stock" ? "active" : ""
            }`}
            onClick={() => handleTabClick("pills-stock")}
          >
            Склады
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              activeTab === "pills-pharmacy" ? "active" : ""
            }`}
            onClick={() => handleTabClick("pills-pharmacy")}
          >
            Аптеки
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              activeTab === "pills-documentation" ? "active" : ""
            }`}
            onClick={() => handleTabClick("pills-documentation")}
          >
            Документы
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              activeTab === "pills-dealers" ? "active" : ""
            }`}
            onClick={() => handleTabClick("pills-dealers")}
          >
            Дилеры
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              activeTab === "pills-statistics" ? "active" : ""
            }`}
            onClick={() => handleTabClick("pills-statistics")}
          >
            Статистика
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
          ... Главная ...
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

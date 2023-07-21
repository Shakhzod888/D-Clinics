import React, { useState } from "react";

function ExpenditureTab() {
  const [activeTab, setActiveTab] = useState("pills-home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="shadow basic_2 shadow-lg bg-body rounded">
        <h3 className="text-center p-3 text-list">
          Список выданных медикаментов
        </h3>
      </div>
    </>
  );
}

export default ExpenditureTab;

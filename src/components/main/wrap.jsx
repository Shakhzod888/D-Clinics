import React from "react";
import PersonalHead from "./personalHead/personalHead";
import MainBody from "./mainBody/mainBody";
function Wrap() {
  return (
    <>
      <div className="weap">
        <PersonalHead />
        <MainBody />
      </div>
    </>
  );
}

export default Wrap;

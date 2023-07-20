import React from "react";
import Logo from "./assets/logo.png";
// import Baner from "./assets/baner.png";
import Profil from "./assets/profil.png";
// import Person from "./assets/person.png";
import FullBaner from "./assets/full baner.png";

import "../personalHead/personalHead.scss";

function PersonalHead() {
  return (
    <>
      <nav className="navbar navbar-light ">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={Logo} alt="" />
          <span className="name font-weight-bold">D-Clinics</span>
        </a>
        <img src={Profil} alt="" />
      </nav>
      <div className="mw-120 ">
        <img src={FullBaner} alt="" />
      </div>
      {/* <div className="mw-120 d-flex  justify-content-center shadow p-3 mb-5 bg-body rounded">
        <img className="position-absolute" src={Baner} alt="" />
        <img className="person position-relative" src={Person} alt="" />
      </div> */}
    </>
  );
}

export default PersonalHead;

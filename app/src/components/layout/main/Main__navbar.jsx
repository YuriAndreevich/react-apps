import React, { useState } from "react";
import { Link } from "react-router-dom";

import s from "./Main__navbar.module.scss";

function Main__navbar() {
  const [visiblePopup, setVisiblePopup] = useState(false);
  // eslint-disable-next-line
  const [useSection, setUseSection] = useState("Верстка");
  

  const clickPopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  return (
    <div className={s.main__header}>
      <Link to="/">Главная</Link>
      <Link to="/pizza">PizzaApp</Link>
      <Link to="/" onClick={() => window.alert("временно недоступен")}>
      todoApp
      </Link>
      <a className={s.item} href="http://history2022.sava.site/" target='_blank' rel="noreferrer">History</a>
      <div onClick={clickPopup} className={s.dropdown}>
        {console.log(visiblePopup)}
        {useSection}
        {visiblePopup && (
          <div className={s.dropdown__content}>
             <Link className={s.item} to="/layout1">Kelvin Designer</Link>
            <Link className={s.item} to="/layout2">вфыавыфавы</Link>
            <Link className={s.item} to="/layout3">nft</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Main__navbar;

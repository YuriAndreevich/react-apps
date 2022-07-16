import React from "react";

import s from "./nft.module.css";

function Nft() {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <button></button>
        <input></input>
        <nav className={s.header__nav}>
          <ul className={s.header__list}>
            <li className={s.header__item} href="*">Collections</li>
            <li className={s.header__item} href="*">Feature</li>
            <li className={s.header__item} href="*">FAQ</li>
            <li className={s.header__item} href="*">Select wallet</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nft;

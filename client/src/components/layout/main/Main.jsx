import React, { useState } from "react";
import { Link } from "react-router-dom";
import SVG from 'react-inlinesvg'

import  "./Main.scss";
import waveSVG from '../../../images/wave.svg'

function Main() {
  const [visiblePopup, setVisiblePopup] = useState(false);
  // eslint-disable-next-line
  const [useSection, setUseSection] = useState("Верстка");

  const clickPopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  return (
    <>
    <div className='main'>

      <div className='main__projects'>
      <div className='main__name'>
        <h1>Yuri Silin</h1>
      </div>
        <div className='main__items'>
          <Link to="/todo">todoApp</Link>
        </div>
        <div className='main__items'>
          <Link to="/pizza">PizzaApp</Link>
        </div>
        <div className='main__items'>
          <Link to="/twitter">Twitter-clone</Link>
        </div>
        
        <div className='main__items'>

          <a
          href="http://history2022.sava.site/"
          target="_blank"
          rel="noreferrer">
          History
        </a>
        </div>
      </div>
      {/*  <div onClick={clickPopup} className={s.dropdown}>
        {useSection}
        {visiblePopup && (
          <div className={s.dropdown__content}>
            <Link className={s.item} to="/layout1">
              Kelvin Designer
            </Link>
            <Link className={s.item} to="/layout2">
              МВидео
            </Link>
            <Link className={s.item} to="/layout3">
              nft
            </Link>
          </div>
        )}
      </div> */}
          <SVG src={waveSVG}/>
    </div>

    </>
  );
}

export default Main;

import React from 'react'
import { Link } from "react-router-dom";
import SVG from 'react-inlineSvg'

import s from './main__content.module.scss'
import waveSVG from '../../images/wave.svg'

function main__content() {
  return (
    <div className={s.content}>
        <div className={s.name}><h1> Yuri Silin </h1></div>
        <div className={s.projects}>
            <Link to='/pizza'><div className={s.projects__item}>
                Pizza App
            </div></Link>
            <Link to="/todo"><div className={s.projects__item}>
                Todo App
            </div></Link>
            <a href="http://history2022.sava.site/" target='_blank' rel="noreferrer"><div className={s.projects__item}>
                History
            </div></a>
            <Link to='/layout1'><div className={s.projects__item}>
                Layouts
            </div></Link>
        </div>
        <SVG src={waveSVG}/>
    </div>
  )
}

export default main__content
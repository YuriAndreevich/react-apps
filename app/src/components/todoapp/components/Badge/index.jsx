import React from 'react'
import classNames from 'classnames'

import './Badge.scss'

function Budge({color, onClick, className}) {
  return (
    <i onClick={onClick} className={classNames('badge',{[`badge--${color}`] : color}, className)}/>
  )
}

export default Budge
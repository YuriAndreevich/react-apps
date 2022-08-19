import React from 'react'

import { Link } from 'react-router-dom'
import SVG from 'react-inlinesvg'
import back from '../../images/back.svg'

function Twitter() {
    return (
        <>
            <Link to='/'>
                <SVG src={back} style={{ height: '30px', position: 'absolute', top: '1px', left: '3px' }} />
            </Link>
            <div>Twitter</div>
        </>
    )
}

export default Twitter
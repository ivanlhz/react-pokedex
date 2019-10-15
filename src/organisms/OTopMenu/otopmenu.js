import React from 'react'
import './style.css'
import {Link} from '@reach/router'

const OTopMenu = ({title}) => (
    <div className="o-topmenu">
        <div className="o-topmenu-title">{ title ? title : 'POKEDEX-JS' }</div>
    <Link to="/">BACK</Link>
</div>)
export default OTopMenu;
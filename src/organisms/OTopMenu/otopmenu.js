import React from 'react'
import './style.css'
import {Link} from '@reach/router'

const OTopMenu = ({title, location}) => (
    <div className="o-topmenu">
        <div className="o-topmenu-title">{ title ? title : 'POKEDEX-JS' }</div>
       { location.pathname !== '/' && <Link to="/">BACK</Link> }
    </div>)
export default OTopMenu;
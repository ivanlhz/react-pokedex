import React from 'react'
import './style.css'

const OTopMenu = ({title}) => (<div className="o-topmenu">
    {title ? title : 'POKEDEX-JS'}
</div>)
export default OTopMenu;
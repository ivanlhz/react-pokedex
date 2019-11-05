import React from 'react'
import './style.css'
import {Link} from '@reach/router'

const OTopMenu = ({title, location}) => (
  <div className='o-topmenu'>
    <h1 className='o-topmenu-title'>{title ? title : 'POKEDEX-JS'}</h1>
    {location.pathname !== '/' && <Link to='/'>BACK</Link>}
  </div>
)
export default React.memo(OTopMenu)

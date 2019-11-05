import React from 'react'
import {OTopMenu} from '../../organisms'
import './tmain.css'

const TMain = ({header, footer, children, location}) => (
  <>
    <OTopMenu title='REACTJS - POKEDEX' location={location} />
    <div className='t-main'>
      {header ? <div className='t-main-header'>{header}</div> : ''}
      <div className='t-main-content'>{children}</div>
      {footer ? <footer className='t-footer'>{footer()}</footer> : ''}
    </div>
  </>
)

export default TMain

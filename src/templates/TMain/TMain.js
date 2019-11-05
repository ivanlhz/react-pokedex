import React from 'react'
import {OTopMenu} from '../../organisms'
import './tmain.css'
import PropTypes from 'prop-types'

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

TMain.propTypes = {
  header: PropTypes.func,
  footer: PropTypes.func,
  children: PropTypes.any,
  location: PropTypes.object,
}

export default TMain

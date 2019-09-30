import React from 'react'
import { OTopMenu } from '../../organisms' 
import './tmain.css'

const TMain = ({header, footer, children}) => (
    <div className='t-main'>
        <OTopMenu />
        { 
            header ? <div className="t-main-header">{header}</div> : ''
        }
        <div className="t-main-content">{children}</div>
        { 
            footer ? <footer className="t-main-footer">{footer()}</footer> : ''
        }
    </div>
)

export default TMain

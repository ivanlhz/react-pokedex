import React from 'react'
import './tmain.css'

const TMain = ({header, content, footer}) => (
    <div className='t-main'>
        { 
            header ? <div className="t-main-header">{header}</div> : ''
        }
        <div className="t-main-content">{content}</div>
        { 
            footer ? <footer className="t-main-footer">{footer}</footer> : ''
        }
    </div>
)

export default TMain

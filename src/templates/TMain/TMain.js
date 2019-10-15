import React from 'react'
import { OTopMenu } from '../../organisms' 
import './tmain.css'

const TMain = ({header, footer, children}) => (
    <>
        <OTopMenu title="REACTJS - POKEDEX" />
        <div className='t-main'>
            { 
                header ? <div className="t-main-header">{header}</div> : ''
            }
            <div className="t-main-content">{children}</div>
            { 
                footer ? <footer className="t-footer">{footer()}</footer> : ''
            }
        </div>
    </>
)


export default TMain

import React from 'react'
import { AIcon, ALink } from '../../atoms'
import './MBlock.css'

 const MBlock = ({logo, link, title, children}) => {
    return (
        <div className="m-block">
            { title ? <h2>{title}</h2> : null }
            <AIcon src={logo} name="logo" />
            <p>
              {children} 
            </p>
            {
                link ?
                <ALink url={link.url}>
                    {link.content}
                </ALink> : null
            }
        </div>
    )
}

export default MBlock
import React from 'react'
import './OHeader.css';
import { MBlock } from '../../molecules';

const OHeader = ({blocks}) => {
    return (
        <div className="grid-3colums">
        {
            blocks.map( element => 
                <MBlock logo={element.logo} title={element.title}>
                   {element.content}
                </MBlock>
            )
        }
        </div>
    )
}

export default OHeader

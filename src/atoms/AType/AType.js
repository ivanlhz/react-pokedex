import React from 'react'
import './style.css'

const AType = ({name}) => {
    return (
        <div className={'type-' + name}>{name}</div>
    )
} 

export default AType;
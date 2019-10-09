import React from 'react'
import './style.css'

const AType = ({name, clickHandler}) => {
    return (
        <div onClick={clickHandler} className={'type-' + name}>{name}</div>
    )
} 

export default AType;
import React from 'react'
import './style.css'

const AType = ({name, unSelected, clickHandler}) => {
    const getClassName = (name) => {
        let toReturn = 'type-' + name;
        if (unSelected) {
            toReturn += ' unSelected'
        }
        return toReturn;
    }

    return (
        <div onClick={clickHandler} className={getClassName(name)}>{name}</div>
    )
} 

export default React.memo(AType);
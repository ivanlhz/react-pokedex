import React from 'react'
import './mpokemon.css'


const MPokemon = ({name, id, sprite}) => {
    return (
        <div className="pokemon">
            <div className="id">{id}</div>
            <div className="sprite">
                <img src={sprite} alt={name} />
            </div>
            <div className="name">{name}</div>
        </div>
    )
}

export default MPokemon;
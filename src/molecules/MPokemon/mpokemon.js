import React from 'react'
import './mpokemon.css'
import {AType} from '../../atoms'

const getClassName = (unSelected) => {
   let textToReturn = 'm-pokemon';

   if (unSelected) {
    textToReturn += ' unSelected'
   }

   return textToReturn;
} 

const MPokemon = ({name, id, sprite, unSelected, types, typeCliked}) => {
    const pokeTypeClicked = (name) => {
        typeCliked(name);
    }
    return (
        <div  className= {getClassName(unSelected)}>
            <div className="number">
                <p>{id}</p>
                <p>{name}</p>
            </div>
            <div  className="content default">
                <div className="sprite">
                    <img src={sprite} alt={name} />
                </div>
            </div>
            <div className="p-type">
                {
                    types && types.map( (type,index) => <AType key={index} name={type.type.name} clickHandler={() => pokeTypeClicked(type.type.name)} />)
                }
            </div>
        </div>
    )
}

export default MPokemon;
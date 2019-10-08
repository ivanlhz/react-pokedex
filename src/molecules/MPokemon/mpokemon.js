import React from 'react'
import './mpokemon.css'
import {AType} from '../../atoms'

const getClassName = ( selected, strong, weak) => {
   let textToReturn = 'content';

   if (selected) {
    textToReturn += ' selected'
   }

   if (strong) {
    textToReturn += ' strong'
   } 
   
   if (weak) {
    textToReturn += ' weak'
   }

   if (!selected && !strong && !weak) {
    textToReturn += ' default'
   }
   return textToReturn;
} 

const MPokemon = ({name, id, sprite, selected, strong, weak, types}) => {
    return (
        <div className="m-pokemon ">
            <div className="number">
                <p>{id}</p>
                <p>{name}</p>
            </div>
            <div  className={getClassName(selected, strong, weak)}>
                <div className="sprite">
                    <img src={sprite} alt={name} />
                </div>
            </div>
            <div className="p-type">
                {
                    types && types.map( (type,index) => <AType key={index} name={type.type.name} />)
                }
            </div>
        </div>
    )
}

export default MPokemon;
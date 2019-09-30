import React from 'react'
import './mpokemon.css'


const getClassName = ( selected, half, double) => {
   let textToReturn = 'm-pokemon';

   if (selected) {
    textToReturn += ' selected'
   }

   if (half) {
    textToReturn += ' half'
   } 
   
   if (double) {
    textToReturn += ' double'
   }
   return textToReturn;
} 

const MPokemon = ({name, id, sprite, selected, half, double}) => {
    return (
        <div className={getClassName(selected, half, double)}>
            <div className="id">{id}</div>
            <div className="sprite">
                <img src={sprite} alt={name} />
            </div>
            <div className="name">{name}</div>
        </div>
    )
}

export default MPokemon;
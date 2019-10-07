import React from 'react'
import './mpokemon.css'


const getClassName = ( selected, strong, weak) => {
   let textToReturn = 'm-pokemon';

   if (selected) {
    textToReturn += ' selected'
   }

   if (strong) {
    textToReturn += ' strong'
   } 
   
   if (weak) {
    textToReturn += ' weak'
   }
   return textToReturn;
} 

const MPokemon = ({name, id, sprite, selected, strong, weak}) => {
    return (
        <div className={getClassName(selected, strong, weak)}>
            <div className="id">{id}</div>
            <div className="sprite">
                <img src={sprite} alt={name} />
            </div>
            <div className="name">{name}</div>
        </div>
    )
}

export default MPokemon;
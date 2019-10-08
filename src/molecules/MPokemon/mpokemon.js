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

const getTypeClassName = (name) => 'type-' + name

const MPokemon = ({name, id, sprite, selected, strong, weak, types}) => {
    return (
        <div className={getClassName(selected, strong, weak)}>
            <div className="number">{id}</div>
            <div className="content">
                <div className="sprite">
                    <img src={sprite} alt={name} />
                </div>
                <div className="name">{name}</div>
                {
                    types && types.map( (type,index) => <div key={index} className={getTypeClassName(type.name)}>{type.name}</div> )
                }
            </div>
        </div>
    )
}

export default MPokemon;
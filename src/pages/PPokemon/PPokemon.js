import React, { useState, useEffect } from 'react';
import {getPokemon} from '../../services/pokeapi'
import {MCircleImage} from '../../molecules'
import './style.css'


const PPokemon = ({name}) => {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        const  getPokemonDetails = async(_name) => {
            const response = await getPokemon(_name);
            setPokemon(response);
        }
        getPokemonDetails(name);
    }, [name]);
    

    return (
        <div className="p-pokemon">
           { pokemon && <MCircleImage imgSrc={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`} /> }
        </div>
    )
}

export default PPokemon;

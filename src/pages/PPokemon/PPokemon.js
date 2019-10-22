import React, { useState, useEffect } from 'react';
import {getPokemon, getPokemonSpecies} from '../../services/pokeapi'
import {MCircleImage} from '../../molecules'
import { OInfoBlock } from '../../organisms';
import { TMain } from '../../templates';
import './style.css'


const PPokemon = ({name, location}) => {
    const [pokemon, setPokemon] = useState({data:{}, specie:{}});

    useEffect(() => {
        const  getPokemonDetails = async(_name) => {
            const data = await getPokemon(_name);
            const specie = await getPokemonSpecies(_name);
            setPokemon({data, specie});
        }
        getPokemonDetails(name);
    }, [name]);
    
    const getDescription = (descList, lang = 'en') => {
        return descList.filter( element =>  element.language.name === lang)[0].flavor_text;
    }

    return (
        <TMain location={location} >
            <div className="p-pokemon">
            { pokemon && <MCircleImage imgSrc={`https://img.pokemondb.net/artwork/${pokemon.data.name}.jpg`} /> }
            {  pokemon.specie.flavor_text_entries && pokemon.specie.flavor_text_entries.length > 0 && <OInfoBlock name={pokemon.specie.name} number={pokemon.data.id} stats={pokemon.data.stats} types={pokemon.data.types} description={getDescription(pokemon.specie.flavor_text_entries)}/>}
            </div>
        </TMain>
    )
}

export default PPokemon;

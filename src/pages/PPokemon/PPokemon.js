import React, { useState, useEffect } from 'react';
import {getPokemonSpecies} from '../../services/pokeapi'
import {MCircleImage} from '../../molecules'
import { OInfoBlock } from '../../organisms';
import { TMain } from '../../templates';
import {PokemonContext} from '../../appRouter'
import './style.css'


const PPokemon = ({name, location}) => {
    const [description, setDescription] = useState(undefined);

    useEffect(() => {
        const  getPokemonDetails = async(_name) => {
            const specie = await getPokemonSpecies(_name);
            setDescription(getDescription(specie.flavor_text_entries));
        }
        getPokemonDetails(name);
    }, [name]);
    

    const getPokemonInfo = (pokemonList) => {
        return pokemonList.filter( poke => poke.name === name)[0];
    }

    const getDescription = (descList, lang = 'en') => {
        return descList.filter( element =>  element.language.name === lang)[0].flavor_text;
    }

    const footer = () => (<p>PokedexJS - Made with ReactJS- 2019</p>)

    return (
        <TMain location={location} footer= {footer}>
        <PokemonContext.Consumer>
        { ({ pokemons }) => {
                const pokemon = getPokemonInfo(pokemons);
                return (<div className="p-pokemon">
                    {  pokemon && <MCircleImage imgSrc={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`} alt={'pokemon-' + pokemon.name} /> }
                    { <OInfoBlock name={pokemon.name} number={pokemon.id} stats={pokemon.stats} types={pokemon.types} description={description} />}
                </div>)
            }
        }
        </PokemonContext.Consumer>
        </TMain>
    )
}

export default PPokemon;

import React, {useState, useEffect} from 'react';
import {Router} from '@reach/router'
import { PHome, PPokemon, PNotFound } from './pages';
import {getPokemonTypeInfo, getPokemonList, getPokemon} from './services/pokeapi'

export const PokemonContext = React.createContext({types:[], pokemons: [], unSelectPokemon: () => {} });


const AppRouter = () => {
    const storage = window.localStorage;
    const [pokemonTypes, setTypes] = useState(storage.getItem('pokereact.types') ? JSON.parse(storage.getItem('pokereact.types')) : []);
    const [pokemonList, setPokemonList] = useState(storage.getItem('pokereact.list') ? JSON.parse(storage.getItem('pokereact.list')) : []);
    const [selectedType, setSelectedType] = useState('');

   const unSelectProperty = (element) =>  {
        element.unSelected = false;
        return element;
    }

    const pokemonHasType = (pokemon, typeName) => pokemon.types.some( ({type}) => type.name === typeName)

    const filterPokemonByTypeName = (typeName) => {
        if ( selectedType === typeName) {
            setPokemonList(pokemonList.map(unSelectProperty)); // Select all pokemons
            setSelectedType(''); // Clear selectedType
            setTypes(pokemonTypes.map(unSelectProperty)); // Select all types
        } else {
            const filteredList = [...pokemonList.map( (pokemon) => {
                pokemon.unSelected = !pokemonHasType(pokemon, typeName)
                return pokemon;
            })];

            const selectedTypeList = pokemonTypes.map( (element) => {
                element.unSelected = element.name !== typeName
                return element;
            } )

            setSelectedType(typeName);
            setPokemonList(filteredList);
            setTypes(selectedTypeList)
        }
    }

    useEffect(() => {
        const getPokemonTypes = async () => {
            const listType = await getPokemonTypeInfo();
            const typeNames = listType.results.map( ({name}) => ({name, unSelected: false}));
            setTypes(typeNames);
            storage.setItem('pokereact.types', JSON.stringify(typeNames))
        }

        const getPokeminList = async () => {
            const pokeListPromises = (await getPokemonList(0, 151)).results.map(({name}) => getPokemon(name));
            
            Promise.all(pokeListPromises).then(values => { 
                const pokemons = values.map( ({id, name, types, sprites, stats}) => ({id, name, types, sprites, stats}))
                setPokemonList(pokemons);
                storage.setItem('pokereact.list', JSON.stringify(pokemons));
            }).catch(reason => { 
                console.error(reason)
            });

        }
        getPokeminList();
        if(!pokemonTypes.length > 0) getPokemonTypes();

    }, [])

    return (
        <PokemonContext.Provider value={{types:pokemonTypes, pokemons: pokemonList, filterPokemonByTypeName}}>
            <Router>
                <PHome path="/" />
                <PPokemon path="/pokemon/:name" />
                <PNotFound default />
            </Router>
        </PokemonContext.Provider>
    )
}

export default AppRouter;
import React from 'react'
import {MPokemon} from '../../molecules'
import './opokelist.css'


const OPokemonList = ({data, clickedType}) => { 

   const pokemonsTypeClicked = (name) => {
        clickedType(name);
    }

    return (
        <div className="o-pokelist">
            {
                data.map(({name, id, sprites:{front_default}, unSelected, types}) => (
                    <div  key={id}>
                        <MPokemon name={name} id={id} sprite={front_default} unSelected={unSelected} types={types} typeCliked={pokemonsTypeClicked} />
                    </div>
                ))
            }
        </div>
    )
}

export default OPokemonList
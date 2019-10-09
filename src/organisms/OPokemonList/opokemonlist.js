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
                data.map(({name, id, sprites:{front_default}, strong, selected, weak, types}, index) => (
                    <div  key={id}>
                        <MPokemon name={name} id={id} sprite={front_default} weak={weak} selected= {selected} strong={strong} types={types} typeCliked={pokemonsTypeClicked} />
                    </div>
                ))
            }
        </div>
    )
}

export default OPokemonList
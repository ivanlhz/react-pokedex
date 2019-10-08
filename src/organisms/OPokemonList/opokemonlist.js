import React from 'react'
import {MPokemon} from '../../molecules'
import './opokelist.css'


const OPokemonList = ({data, selectedHandler}) => { 
    return (
        <div className="o-pokelist">
            {
                data.map(({name, id, sprites:{front_default}, strong, selected, weak, types}, index) => (
                    <div  key={id} onClick={ () => selectedHandler(index) }>
                        <MPokemon name={name} id={id} sprite={front_default} weak={weak} selected= {selected} strong={strong} types={types} />
                    </div>
                ))
            }
        </div>
    )
}

export default OPokemonList
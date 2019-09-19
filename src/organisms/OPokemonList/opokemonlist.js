import React from 'react'
import {MPokemon} from '../../molecules'
import './opokelist.css'


const OPokemonList = ({data}) => { 
    return (
        <div className="o-pokelist">
            {
                data.map(({name, id, sprites:{front_default}}) => (
                    <MPokemon name={name} id={id} sprite={front_default} />
                ))
            }
        </div>
    )
}

export default OPokemonList
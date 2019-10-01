import React from 'react'
import {MPokemon} from '../../molecules'
import './opokelist.css'


const OPokemonList = ({data, selectedHandler}) => { 
    return (
        <div className="o-pokelist">
            {
                data.map(({name, id, sprites:{front_default}, double, selected, half}, index) => (
                    <div  key={id} onClick={ () => selectedHandler(index) }>
                        <MPokemon name={name} id={id} sprite={front_default} double={double} selected= {selected} half={half} />
                    </div>
                ))
            }
        </div>
    )
}

export default OPokemonList
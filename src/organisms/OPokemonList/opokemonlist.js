import React from 'react'
import {MPokemon} from '../../molecules'
import './opokelist.css'
import PropTypes from 'prop-types'

const OPokemonList = ({data, clickedType}) => {
  const pokemonsTypeClicked = name => {
    clickedType(name)
  }

  return (
    <div className='o-pokelist'>
      {data.map(({name, id, sprites: {front_default}, unSelected, types}) => (
        <div key={id}>
          <MPokemon
            name={name}
            id={id}
            sprite={front_default}
            unSelected={unSelected}
            types={types}
            typeCliked={pokemonsTypeClicked}
          />
        </div>
      ))}
    </div>
  )
}

OPokemonList.propTypes = {data: PropTypes.array.isRequired, clickedType: PropTypes.func.isRequired}

export default OPokemonList

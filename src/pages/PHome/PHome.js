import React from 'react'
import './PHome.css'
import {OPokemonList, OTypeList} from '../../organisms'
import {TMain} from '../../templates'
import {PokemonContext} from '../../appRouter'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'

const footer = () => <p>PokedexJS - Made with ReactJS- 2019</p>

const PHome = ({location}) => {
  return (
    <PokemonContext.Consumer>
      {({types, pokemons, filterPokemonByTypeName}) => (
        <TMain location={location} footer={footer}>
          {!pokemons ? (
            <FontAwesomeIcon icon={faSpinner} pulse />
          ) : (
            <>
              <OTypeList list={types} selected={name => filterPokemonByTypeName(name)} />
              {pokemons.length > 0 && (
                <OPokemonList data={pokemons} clickedType={name => filterPokemonByTypeName(name)} />
              )}
            </>
          )}
        </TMain>
      )}
    </PokemonContext.Consumer>
  )
}
PHome.propTypes = {
  location: PropTypes.object,
}

export default PHome

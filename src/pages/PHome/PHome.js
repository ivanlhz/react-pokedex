import React, {Component} from 'react'
import './PHome.css'
import {OPokemonList, OTypeList} from '../../organisms'
import {TMain} from '../../templates'
import {PokemonContext} from '../../appRouter'
import PropTypes from 'prop-types'

class PHome extends Component {
  footer = () => <p>PokedexJS - Made with ReactJS- 2019</p>

  render() {
    return (
      <TMain location={this.props.location} footer={this.footer}>
        <PokemonContext.Consumer>
          {({types, pokemons, filterPokemonByTypeName}) => (
            <>
              <OTypeList list={types} selected={name => filterPokemonByTypeName(name)} />
              {pokemons.length > 0 && (
                <OPokemonList data={pokemons} clickedType={name => filterPokemonByTypeName(name)} />
              )}
            </>
          )}
        </PokemonContext.Consumer>
      </TMain>
    )
  }
}
PHome.propTypes = {
  location: PropTypes.object.isRequired,
}

export default PHome

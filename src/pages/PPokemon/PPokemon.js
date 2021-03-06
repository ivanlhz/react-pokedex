import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {getPokemonSpecies} from '../../services/pokeapi'
import {MCircleImage} from '../../molecules'
import {OInfoBlock} from '../../organisms'
import {TMain} from '../../templates'
import {PokemonContext} from '../../appRouter'
import './style.css'
import {ALoading} from '../../atoms'

const PPokemon = ({name, location}) => {
  const [description, setDescription] = useState(undefined)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getPokemonDetails = async _name => {
      const specie = await getPokemonSpecies(_name)
      setDescription(getDescription(specie.flavor_text_entries))
      setIsLoading(false)
    }
    getPokemonDetails(name)
  }, [name])

  const getPokemonInfo = pokemonList => {
    return pokemonList.filter(poke => poke.name === name)[0]
  }

  const getDescription = (descList, lang = 'en') => {
    return descList.filter(element => element.language.name === lang)[0].flavor_text
  }

  const footer = () => <p>PokedexJS - Made with ReactJS- 2019</p>

  return (
    <TMain location={location} footer={footer}>
      <ALoading isLoading={isLoading}>
        <PokemonContext.Consumer>
          {({pokemons}) => {
            const pokemon = getPokemonInfo(pokemons)
            return (
              <div className='p-pokemon'>
                {pokemon ? (
                  <MCircleImage
                    imgSrc={`https://img.pokemondb.net/artwork/${pokemon.name}.jpg`}
                    alt={'pokemon-' + pokemon.name}
                  />
                ) : (
                  <MCircleImage />
                )}
                {<OInfoBlock {...pokemon} description={description} />}
              </div>
            )
          }}
        </PokemonContext.Consumer>
      </ALoading>
    </TMain>
  )
}

PPokemon.propTypes = {
  name: PropTypes.string,
  location: PropTypes.object,
}

export default PPokemon

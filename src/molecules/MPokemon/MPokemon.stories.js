import React from 'react'
import MPokemon from './mpokemon'
import {withKnobs, text, number} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'

export default {
  component: MPokemon,
  title: 'Molecules/MPokemon',
  decorators: [withKnobs],
}

export const Normal = () => {
  const types = [
    {slot: 2, type: {name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/'}},
    {slot: 1, type: {name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/'}},
  ]
  const clickHandler = () => action('Type is clicked!!')

  return (
    <MPokemon
      name={text('Name', 'Venosaur')}
      id={number('Id:', 3)}
      types={types}
      sprite={text('Sprite:', 'https://img.pokemondb.net/artwork/venusaur.jpg')}
      typeCliked={clickHandler()}
    />
  )
}

import React from 'react'
import {MPokemon} from '.'
import {withKnobs, text, boolean, array, number} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'

export default {
  component: MPokemon,
  title: 'Molecules/MPokemon',
  decorators: [withKnobs],
}

export const Default = () => (
  <MPokemon
    id={number('Id', 6)}
    name={text('Name', 'Charizard')}
    unSelected={boolean('Unselected?', false)}
    typeCliked={action('Pokemon TYPE clicked!!')}
    sprite='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
    types={array('Types Array', [
      {slot: 2, type: {name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/'}},
      {slot: 1, type: {name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/'}},
    ])}
  />
)

export const Unselected = () => (
  <MPokemon
    id={number('Id', 6)}
    name={text('Name', 'Charizard')}
    unSelected={boolean('Unselected?', true)}
    typeCliked={action('Pokemon TYPE clicked!!')}
    sprite='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
    types={array('Types Array', [
      {slot: 2, type: {name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/'}},
      {slot: 1, type: {name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/'}},
    ])}
  />
)

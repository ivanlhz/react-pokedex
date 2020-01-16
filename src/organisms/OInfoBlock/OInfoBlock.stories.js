import React from 'react'
import {withKnobs, text, number, select, optionsKnob, object} from '@storybook/addon-knobs'
import OInfoBlock from './OInfoBlock'

export default {
  component: OInfoBlock,
  title: 'Organisms/OinfoBlock',
  decorators: [withKnobs],
}

export const Normal = () => {
  const data = {
    name: 'charizard',
    number: 6,
    stats: [
      {base_stat: 100, effort: 0, stat: {name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/'}},
      {
        base_stat: 85,
        effort: 0,
        stat: {name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/'},
      },
      {
        base_stat: 109,
        effort: 3,
        stat: {name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/'},
      },
      {base_stat: 78, effort: 0, stat: {name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/'}},
      {base_stat: 84, effort: 0, stat: {name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/'}},
      {base_stat: 78, effort: 0, stat: {name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/'}},
    ],
    types: [
      {
        slot: 2,
        type: {
          name: 'flying',
          url: 'https://pokeapi.co/api/v2/type/3/',
        },
      },
      {
        slot: 1,
        type: {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
      },
    ],
    description: 'Charizard flies around the sky in search of powerful opponents.',
  }
  return (
    <OInfoBlock
      name={text('Name:', data.name)}
      number={number('Number:', data.number)}
      stats={object('Stats:', data.stats)}
      types={object('Types:', data.types)}
      description={text('Description', data.description)}
    />
  )
}

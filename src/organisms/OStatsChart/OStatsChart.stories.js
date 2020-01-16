import React from 'react'
import {withKnobs, object} from '@storybook/addon-knobs'
import OStatsChart from './OStatsChart'

export default {
  component: OStatsChart,
  title: 'Organisms/OStartsCharts',
  decorators: [withKnobs],
}

export const Normal = () => {
  const data = [
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
  ]

  return <OStatsChart stats={object('Stats:', data)} />
}

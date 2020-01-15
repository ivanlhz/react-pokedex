import React from 'react'
import OTypeList from './OTypeList'
import {withKnobs} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'

export default {
  component: OTypeList,
  title: 'Organisms/OTypeList',
  decorators: [withKnobs],
}

export const Normal = () => {
  const typeList = [
    {name: 'normal', unSelected: false},
    {name: 'fighting', unSelected: false},
    {name: 'flying', unSelected: false},
    {name: 'poison', unSelected: false},
    {name: 'ground', unSelected: false},
    {name: 'rock', unSelected: false},
    {name: 'bug', unSelected: false},
    {name: 'ghost', unSelected: false},
    {name: 'steel', unSelected: false},
    {name: 'fire', unSelected: false},
    {name: 'water', unSelected: false},
    {name: 'grass', unSelected: false},
    {name: 'electric', unSelected: false},
    {name: 'psychic', unSelected: false},
    {name: 'ice', unSelected: false},
    {name: 'dragon', unSelected: false},
    {name: 'dark', unSelected: false},
    {name: 'fairy', unSelected: false},
    {name: 'unknown', unSelected: false},
    {name: 'shadow', unSelected: false},
  ]
  const selectedHandler = () => action(`Type is clicked!!`)

  return <OTypeList list={typeList} selected={selectedHandler()} />
}

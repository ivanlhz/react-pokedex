import React from 'react'
import {AType} from '.'
import {withKnobs, optionsKnob as options, boolean} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'

export default {
  component: AType,
  title: 'Atoms/AType',
  decorators: [withKnobs],
}

const label = 'Pokemon Type'
const valuesObj = {
  Fire: 'fire',
  Water: 'water',
  Dragon: 'dragon',
}
const defaultValue = 'fire'
const optionsObj = {
  display: 'select',
}

export const Selected = () => (
  <AType
    name={options(label, valuesObj, defaultValue, optionsObj)}
    unSelected={boolean('Unselected', false)}
    clickHandler={action('Click')}
  />
)
export const Unselected = () => (
  <AType
    name={options(label, valuesObj, defaultValue, optionsObj)}
    unSelected={boolean('Unselected', true)}
    clickHandler={action('Click')}
  />
)

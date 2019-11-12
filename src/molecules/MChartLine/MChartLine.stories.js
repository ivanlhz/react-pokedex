import React from 'react'
import {MChartLine} from '.'
import {withKnobs, number, optionsKnob as options} from '@storybook/addon-knobs'

export default {
  component: MChartLine,
  title: 'Molecules/MChartLine',
  decorators: [withKnobs],
}

const label = 'Stat Name'
const valuesObj = {
  Speed: 'Speed',
  Hp: 'Hp',
  Attack: 'Attack',
}
const defaultValue = 'Speed'
const optionsObj = {
  display: 'select',
}

export const Normal = () => (
  <MChartLine
    data={{
      stat: {name: options(label, valuesObj, defaultValue, optionsObj)},
      base_stat: number('Value', 28),
    }}
  />
)

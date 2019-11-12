import React from 'react'
import ABarCHart from './ABarChart'
import {withKnobs, number} from '@storybook/addon-knobs'

export default {
  component: ABarCHart,
  title: 'Atoms/BarChart',
  decorators: [withKnobs],
}

export const red = () => <ABarCHart value={number('Value', 23)} />
export const yellow = () => <ABarCHart value={number('Value', 45)} />
export const green = () => <ABarCHart value={number('Value', 90)} />

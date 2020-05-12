import React from 'react'
import MInfoTitle from './MInfoTitle'
import {withKnobs, text, number} from '@storybook/addon-knobs'

export default {
  coponent: MInfoTitle,
  title: 'Molecules/MInfoTitle',
  decorators: [withKnobs],
}

export const Normal = () => (
  <MInfoTitle name={text('Name:', 'Lorem itsum')} id={number('Id:', 222)} />
)

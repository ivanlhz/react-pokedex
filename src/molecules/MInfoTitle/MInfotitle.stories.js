import React from 'react'
import MInfoTitle from './MInfoTitle'
import {withKnobs, text, number} from '@storybook/addon-knobs'

export default {
  component: MInfoTitle,
  title: 'Molecules/MInfoTitle',
  decorators: [withKnobs],
}

export const MInfoTitleComponent = () => (
  <MInfoTitle name={text('Name', 'Hello world')} id={number('ID', 22)} />
)

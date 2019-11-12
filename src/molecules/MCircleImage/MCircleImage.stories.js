import React from 'react'
import MCircleImage from './MCircleImage'
import {withKnobs, text} from '@storybook/addon-knobs'

export default {
  component: MCircleImage,
  title: 'Molecules/MCircleImage',
  decorators: [withKnobs],
}

export const Normal = () => (
  <MCircleImage
    imgSrc={text('Image URL', 'https://source.unsplash.com/random')}
    alt={text('Alt', 'Imagen random')}
  />
)

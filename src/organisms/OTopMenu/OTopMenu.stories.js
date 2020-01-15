import React from 'react'
import {withKnobs, text, object} from '@storybook/addon-knobs'
import OTopMenu from './OTopMenu'

export default {
  component: OTopMenu,
  title: 'Organisms/OTopMenu',
  decorators: [withKnobs],
}

export const Normal = () => (
  <OTopMenu
    title={text('Title:', 'Charizard')}
    location={object('location:', {pathname: '/Charizard'})}
  />
)
export const Home = () => (
  <OTopMenu title={text('Title:', 'Home')} location={object('location:', {pathname: '/'})} />
)

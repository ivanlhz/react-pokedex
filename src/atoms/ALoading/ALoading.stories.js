import React from 'react'
import ALoading from './ALoading'

export default {
  component: ALoading,
  title: 'Atoms/Loading',
}

export const defaultState = () => (
  <ALoading>
    <h2>Finish to load</h2>
  </ALoading>
)

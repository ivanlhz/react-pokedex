import React from 'react'
import ReactDOM from 'react-dom'
import PHome from './PHome'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PHome />, div)
  ReactDOM.unmountComponentAtNode(div)
})

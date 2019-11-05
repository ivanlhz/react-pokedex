import React from 'react'
import './style.css'
import PropTypes from 'prop-types'

const MInfoTitle = ({name, id}) => (
  <h2 className='m-infotitle'>
    {name}
    <span>#{id}</span>
  </h2>
)

MInfoTitle.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}
export default React.memo(MInfoTitle)

import React from 'react'
import './style.css'
import {ABarChart} from '../../atoms'
import PropTypes from 'prop-types'

const MChartLine = ({
  data: {
    base_stat,
    stat: {name},
  },
}) => {
  return (
    <div className='m-chartline'>
      <div className='m-chartline-name'>{name}</div>
      <div className='m-chartline-value'>{base_stat}</div>
      <ABarChart value={base_stat} />
    </div>
  )
}
MChartLine.propTypes = {
  data: PropTypes.shape({
    stat: PropTypes.object.isRequired,
    base_stat: PropTypes.number.isRequired,
  }),
}

export default MChartLine

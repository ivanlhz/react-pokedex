import React from 'react'
import './style.css'
import {ABarChart} from '../../atoms'
import PropTypes from 'prop-types'

const MChartLine = ({data}) => {
  return (
    <div className='m-chartline'>
      <div className='m-chartline-name'>{data.stat.name}</div>
      <div className='m-chartline-value'>{data.base_stat}</div>
      <ABarChart value={data.base_stat} />
    </div>
  )
}
MChartLine.propTypes = {
  data: PropTypes.shape({
    stat: PropTypes.string.isRequired,
    base_stat: PropTypes.number.isRequired,
  }),
}

export default MChartLine

import React from 'react'
import {MChartLine} from '../../molecules'
import PropTypes from 'prop-types'

const OStatsChart = ({stats}) => {
  return (
    <div className='o-statschart'>
      {stats.map((element, index) => (
        <MChartLine key={index} data={element} />
      ))}
    </div>
  )
}

OStatsChart.propTypes = {stats: PropTypes.array.isRequired}

export default OStatsChart

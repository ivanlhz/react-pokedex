import React from 'react'
import './style.css'
import {ABarChart} from '../../atoms'

const MChartLine = ({data}) => {
  return (
    <div className='m-chartline'>
      <div className='m-chartline-name'>{data.stat.name}</div>
      <div className='m-chartline-value'>{data.base_stat}</div>
      <ABarChart value={data.base_stat} />
    </div>
  )
}

export default MChartLine

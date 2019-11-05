import React from 'react'
import './style.css'
import {MInfoTitle} from '../../molecules'
import {OTypeList, OStatsChart} from '../../organisms'
import PropTypes from 'prop-types'

const OInfoBlock = ({name, number, stats, types, description}) => (
  <div className='o-infoblock'>
    <header>
      <MInfoTitle name={name} id={number} />
      <OTypeList list={types} />
    </header>
    <p>{description}</p>
    <h2>Base Stats</h2>
    <OStatsChart stats={stats} />
  </div>
)

OInfoBlock.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  stats: PropTypes.array.isRequired,
  types: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
}

export default OInfoBlock

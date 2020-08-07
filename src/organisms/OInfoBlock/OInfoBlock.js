import React from 'react'
import './style.css'
import {ALoading} from '../../atoms'
import {MInfoTitle} from '../../molecules'
import {OTypeList, OStatsChart} from '../../organisms'
import PropTypes from 'prop-types'

const OInfoBlock = props => {
  const getClassNames = () => {
    return props.name && props.description ? '' : ' center'
  }
  return (
    <div className={`o-infoblock${getClassNames()}`}>
      {props.name && props.description ? (
        <>
          <header>
            <MInfoTitle name={props.name} id={props.number} />
            <OTypeList list={props.types} />
          </header>
          <p>{props.description}</p>
          <h2>Base Stats</h2>
          <OStatsChart stats={props.stats} />
        </>
      ) : (
        <ALoading />
      )}
    </div>
  )
}

OInfoBlock.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  stats: PropTypes.array,
  types: PropTypes.array,
  description: PropTypes.string,
}

export default OInfoBlock

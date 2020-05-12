/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import React from 'react'
import Proptypes from 'prop-types'
import './style.css'

const ABarChart = ({value}) => {
  const getClassName = () => {
    let toReturn = 'a-barchart'
    if (value < 40) {
      toReturn += ' red'
    } else if (value >= 40 && value < 70) {
      toReturn += ' yellow'
    } else {
      toReturn += ' green'
    }
    return toReturn
  }

  return (
    <div
      className={getClassName()}
      css={css`
        width: ${(value * 100) / 255}%;
      `}
    />
  )
}

ABarChart.propTypes = {
  value: Proptypes.number.isRequired,
}

export default React.memo(ABarChart)

/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import React from 'react'
import Proptypes from 'prop-types'
import './style.css'

const ABarChart = ({value}) => {
  const getClassName = currentValue => {
    let toReturn = 'a-barchart'
    if (currentValue < 40) {
      toReturn += ' red'
    } else if (currentValue >= 40 && currentValue < 70) {
      toReturn += ' yellow'
    } else {
      toReturn += ' green'
    }
    return toReturn
  }

  return (
    <div
      className={getClassName(value)}
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

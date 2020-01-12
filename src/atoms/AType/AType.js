import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const AType = ({name, unSelected, clickHandler}) => {
  const getClassName = name => {
    let toReturn = 'type-' + name
    if (unSelected) {
      toReturn += ' unSelected'
    }
    return toReturn
  }

  return (
    <div onClick={clickHandler} className={getClassName(name)}>
      {name}
    </div>
  )
}

AType.propTypes = {
  name: PropTypes.string.isRequired,
  unSelected: PropTypes.bool,
  clickHandler: PropTypes.func,
}

export default React.memo(AType)

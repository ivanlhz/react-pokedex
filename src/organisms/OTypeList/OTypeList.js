import React from 'react'
import {AType} from '../../atoms'
import './style.css'
import PropTypes from 'prop-types'

const OTypeList = ({list, selected}) => {
  const typeClicked = name => {
    if (selected) selected(name)
  }

  return (
    <div className='o-typelist'>
      {list.length > 0 &&
        list.map((type, index) => (
          <AType
            key={index}
            name={type.name ? type.name : type.type.name}
            clickHandler={() => typeClicked(type.name)}
            unSelected={type.unSelected}
          />
        ))}
    </div>
  )
}

OTypeList.propTypes = {list: PropTypes.array.isRequired, selected: PropTypes.func.isRequired}

export default OTypeList

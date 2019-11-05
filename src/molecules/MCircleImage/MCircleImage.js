import React from 'react'
import './style.css'
import PropTypes from 'prop-types'

const MCircleImage = ({imgSrc, alt}) => {
  return (
    <div className='m-circleimage'>
      <img src={imgSrc} alt={alt} />
    </div>
  )
}

MCircleImage.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default React.memo(MCircleImage)

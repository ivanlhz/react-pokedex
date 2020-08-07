import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import {aLoading} from './styles.module.css'
import PropTypes from 'prop-types'

const ALoading = ({children, isLoading = true}) => {
  return (
    <div className={aLoading}>
      {isLoading ? (
        <>
          <FontAwesomeIcon icon={faSpinner} pulse />
          <p>Loading...</p>
        </>
      ) : (
        children
      )}
    </div>
  )
}

ALoading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}
export default ALoading

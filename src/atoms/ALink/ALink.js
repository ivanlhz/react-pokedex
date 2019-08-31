import React from 'react'

const ALink = ({url, children}) => (
    <a
        className="app-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
    >{children}</a>
)

export default ALink

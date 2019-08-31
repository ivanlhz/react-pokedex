import React from 'react'

const AIcon = ({src, name}) => (
    <img src={src} className={`a-icon${'-' + name}`} alt={name} />
)

export default AIcon;
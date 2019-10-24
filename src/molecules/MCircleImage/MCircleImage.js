import React from 'react'
import './style.css'


const MCircleImage = ({imgSrc, alt}) => {
    return (
        <div className="m-circleimage">
            <img src={imgSrc} alt={alt}/>
        </div>
    )
}

export default React.memo(MCircleImage);

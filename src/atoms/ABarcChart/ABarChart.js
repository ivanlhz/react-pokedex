import React from 'react'
import './style.css'


const ABarChart = ({value}) => {

    const getClassName = (currentValue) => {
        let toReturn = 'a-barchart';
        switch (currentValue) {
            case value < 40 :
                toReturn +=' red'
                break;
            case  value >=40 && value < 60 :
                toReturn +=' yellow'
                break;
            default:
                toReturn +=' green'
                break;
        }

        return toReturn
    }

    return <div className={getClassName(value)}></div>
}

export default ABarChart

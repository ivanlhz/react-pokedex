import React from 'react'
import { MChartLine } from '../../molecules'

const OStatsChart = ({stats}) => {
    return (
        <div className="o-statschart">
            {
                stats.map( (element, index) => 
                    <MChartLine key={index} data={element} />
                )
            }
        </div>
    )
}

export default OStatsChart;
import React from 'react'
import './style.css'
import { MInfoTitle } from '../../molecules'
import { OTypeList } from '../../organisms'


const OInfoBlock = ({name, number, stats, types, description}) => <div className="o-infoblock">
    <header>
        <MInfoTitle name={name} id={number} />
        <OTypeList list={types} />
    </header>
    <p>{description}</p>
    <h2>Base Stats</h2>
</div>

export default OInfoBlock

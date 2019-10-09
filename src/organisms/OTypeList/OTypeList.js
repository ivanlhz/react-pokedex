import React from 'react';
import { AType } from '../../atoms';
import './style.css';

const OTypeList = ({list}) => {
    return (
        <div className="o-typelist">
        {
            list && list.map( (type, index) => <AType key={index} name={type.name} />)
        }
        </div>
    )
}

export default OTypeList;
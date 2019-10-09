import React from 'react';
import { AType } from '../../atoms';
import './style.css';


const OTypeList = ({list, selected}) => {

    const typeClicked = (name) => {
        selected(name);
    }

    return (
        <div className="o-typelist">
        {
            list && list.map( (type, index) => <AType key={index} name={type.name} clickHandler={() => typeClicked(type.name)} />)
        }
        </div>
    )
}

export default OTypeList;
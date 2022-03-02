import React from 'react';
import Breadcrumb from './components/Breadcrumb';
import Node from './components/Node';
import Data from './data/Data';

const OrganizationalStructure = (props) => {
    const { name } = Data;

    console.log(Data);
    const onClickHandler = icon => {
        console.log(icon);
    }

    const handlerNode = () => {
        console.log('Edit');
    }

    return (
        <div className='container'>
            <Breadcrumb />
            <Node name={ name } clickHandlerNode={handlerNode} clickHandlerFunction={onClickHandler} remove={ false } />
        </div>
    )
}

export default OrganizationalStructure;

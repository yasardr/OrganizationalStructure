import React from 'react'
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import Node from "../components/Node";
import Data from '../data/Data';

const MainPage = props => {
    const { name } = Data;

    console.log(Data);
    const onClickHandler = icon => {
        console.log(icon);
    }

    const handlerNode = () => {
        console.log('Edit');
    }

    return (
        <AppFrame>
            <Node name={ name } clickHandlerNode={handlerNode} clickHandlerFunction={onClickHandler} remove={ false } />
        </AppFrame>
    )
}

MainPage.propTypes = {}

export default MainPage;
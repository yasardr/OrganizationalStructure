import React from 'react'
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import Node from "../components/Node";
import { useNavigate } from 'react-router-dom';

const MainPage = ({data}) => {
    const { name, id } = data;
    const navigate = useNavigate();

    //Add node, delete node or collapse nodes
    const onClickHandler = icon => {
        if (icon !== 'add' && icon !== 'remove') {
            navigate(`/${id}`);
        }
    }

    return (
        <AppFrame nodeMain={id} isHide={true} data={data}>
            <Node name={name} clickHandlerNode={onClickHandler} clickHandlerFunction={onClickHandler} remove={ false } />
        </AppFrame>
    )
}

MainPage.propTypes = {
    data: PropTypes.object.isRequired
}

export default MainPage;
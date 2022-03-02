import React from 'react';
import PropTypes from 'prop-types';
//Crear un component para esta list y meter en esta page

const renderNode = eventOnClickNode => node => {
    const { id, name } = node;
    return (
        <li key={id} onClick={eventOnClickNode}>
            {/* <Node name={name} clickHandlerNode={handlerNode} clickHandlerFunction={onClickHandler} /> */}
        </li>
    );
}

const NodePage = ({ data, onClickNode }) => {
  return (
    <ul>
        {
            // data.map(node => renderNode(onClickNode)(node))
        }
    </ul>
  )
}

NodePage.propTypes = {
    data: PropTypes.array.isRequired,
    onClickNode: PropTypes.func.isRequired
}

export default NodePage;
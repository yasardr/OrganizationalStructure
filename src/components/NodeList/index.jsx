import React from 'react';
import PropTypes from 'prop-types';
import Node from "../Node";
import './styles.css';

const renderNode = eventOnClickNode => (node, data) => {
    const { id, name } = node;
    let isLast = false;
    for (const key in node) {
        if (typeof node[key] === 'object') {
            isLast = true;
        }
    }
    return (
        <li key={id}>
            <Node name={name} clickHandlerNode={() => eventOnClickNode(id, data)} clickHandlerFunction={() => eventOnClickNode(id, data)} secondary='secondary' buttons={isLast} />
        </li>
    );
}

const NodeList = ({ data, onClickNode }) => {
    return (
        <div className='container-list'>
            <ul>
                {
                    data.map(node => renderNode(onClickNode)(node, data))
                }
            </ul>
        </div>
      )
}

NodeList.propTypes = {
    data: PropTypes.array.isRequired,
    onClickNode: PropTypes.func.isRequired
}

export default NodeList;
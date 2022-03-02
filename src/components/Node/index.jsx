import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Button from '../Button';

const Node = ({ name, clickHandlerNode, clickHandlerFunction, remove = true }) => {
  return (
    <div className='node-container'>
        <span onClick={() => clickHandlerNode()}>
          { name !== '' ? name : 'Nombre de la organización' }
        </span>
        { remove && <Button type="btn-remove" icon="remove" clickHandler={clickHandlerFunction} /> }
        <Button type="btn-add" icon="add" clickHandler={clickHandlerFunction} />
        <Button type="btn-arrow" icon="chevron_right" clickHandler={clickHandlerFunction} />
    </div>
  )
}

Node.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandlerNode: PropTypes.func.isRequired,
  clickHandlerFunction: PropTypes.func.isRequired,
  remove: PropTypes.bool
}

export default Node;

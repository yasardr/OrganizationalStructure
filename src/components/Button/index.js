import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Button = ({ type, icon, clickHandler }) => (
  <button className={ 'btn-round ' + type } onClick={() => clickHandler(icon)}>
      <span className="material-icons">{ icon }</span>
  </button> 
)

Button.propTypes = {
    type: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default Button;

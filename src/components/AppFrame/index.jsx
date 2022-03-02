import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from "../Breadcrumb";
import './styles.css';

const AppFrame = ({ children }) => {
  return (
    <>
        <Breadcrumb />
        <div className='container'>
            { children }
        </div>
    </>
  )
}

AppFrame.propTypes = {
    children: PropTypes.node
}

export default AppFrame;
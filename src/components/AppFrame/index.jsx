import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from "../Breadcrumb";
import './styles.css';

const AppFrame = ({ children, data, nodeMain, isHide=false }) => {
  return (
    <>
        <Breadcrumb nodeId={nodeMain} isHide={isHide} data={data} />
        <div className='container'>
            { children }
        </div>
    </>
  )
}

AppFrame.propTypes = {
    children: PropTypes.node,
    data: PropTypes.object,
    nodeMain: PropTypes.number.isRequired,
    isHide: PropTypes.bool
}

export default AppFrame;
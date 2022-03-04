import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from "../Breadcrumb";
import './styles.css';
import { search } from '../../services/search';

const AppFrame = ({ children, data, nodeMain, isHide=false }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const res = search(nodeMain, data);
    const {tracing} = res;
    let aux = data;
    let arr = [data];
    tracing.forEach(t => {
      aux = aux[t];
      if ( typeof t === 'number') {
        arr.push(aux);
      }
    });
    setItems(arr);
  }, [data, nodeMain]);
  

  return (
    <>
        <Breadcrumb nodeId={nodeMain} isHide={isHide} data={data} items={items} />
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
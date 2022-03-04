import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import BreadcrumbItem from '../BreadcrumbItem';


const Breadcrumb = ({ nodeId, isHide, data }) => {
  let title = 'Organización';
  let content = 'Angeles S.A de C.V';
  // console.log(nodeId);
  // console.log(data);

  return (
    <div className='breadcrumb'>
      { 
        !isHide && <BreadcrumbItem title={title} content={content} />
      }
    </div>
  )
}

Breadcrumb.propTypes = {
  nodeId: PropTypes.number.isRequired,
  isHide: PropTypes.bool.isRequired
}

export default Breadcrumb;

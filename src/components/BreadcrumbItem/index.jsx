import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const BreadcrumbItem = ({ title, content }) => {
  return (
      <div className='item-breadcrumb selected'>
        <div className='text'>
            <h5>{ title }</h5>
            <span>{ content }</span>
        </div>
        <div className='arrow'>
            <span className="material-icons">chevron_right</span>
        </div>
      </div>
  )
}

BreadcrumbItem.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default BreadcrumbItem;

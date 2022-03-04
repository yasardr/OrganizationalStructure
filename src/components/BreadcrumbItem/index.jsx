import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';

const BreadcrumbItem = ({ title, content, isSelected, id }) => {
  let className = 'item-breadcrumb';
  if (isSelected) className += ' selected';
  return (
      <div className={className}>
        <Link to={`/${id}`}>
          <div className='text'>
              <h5>{ title }</h5>
              <span>{ content }</span>
          </div>
        </Link>
        <div className='arrow'>
            <span className="material-icons">chevron_right</span>
        </div>
      </div>
  )
}

BreadcrumbItem.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
}

export default BreadcrumbItem;

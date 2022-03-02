import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import BreadcrumbItem from '../BreadcrumbItem';

const Breadcrumb = (props) => {
  return (
    <div className='breadcrumb'>
        <BreadcrumbItem title='Organización' content='Angeles S.A de C.V' />
    </div>
  )
}

Breadcrumb.propTypes = {}

export default Breadcrumb;

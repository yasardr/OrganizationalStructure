import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import BreadcrumbItem from '../BreadcrumbItem';

const renderBreadcrumbItem = (item, data, nodeId) => {
  const {id, name: content} = item;
  let title = '';
  for (const key in item) {
    switch (key) {
        case 'institutions':
            title = 'Organización';
            break;
        case 'departments':
          title = 'Institución';
            break;
        case 'others':
          title = 'Departamento';
            break;
        case 'services':
          title = 'Otros';
            break;
        case 'items':
          title = 'Servicio';
            break;
        default:
            break;
    }
  }
  return (
    <BreadcrumbItem key={id} id={id} title={title} content={content} isSelected={id === nodeId} />
  );
}

const Breadcrumb = ({ nodeId, isHide, data, items }) => {
  return (
    <div className='breadcrumb'>
      {
        !isHide &&  items.map(item => renderBreadcrumbItem(item, data, nodeId))
      }
    </div>
  )
}

Breadcrumb.propTypes = {
  nodeId: PropTypes.number.isRequired,
  isHide: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
}

export default Breadcrumb;

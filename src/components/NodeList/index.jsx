import React from 'react';
import PropTypes from 'prop-types';
import Node from "../Node";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './styles.css';

const SwalEdit = withReactContent(Swal);

//Add node, delete node or collapse nodes
// const onClickHandler = icon => {
//     if (icon === 'add') {
//         // const obj = {
//         //     name: '',
//         //     departments: []
//         // }
//         // data.institutions.push(obj);
//         // setItems(...items , obj);
//     } else if (icon === 'remove') {
//         actions({ type: 'REMOVE_NODE', payload: id });
//     } else {
//         navigate(`/${id}`);
//     }
// }

//Edit node name /// revisar para cambiar a principal y ejecutar lo que haya clickeado
const handlerNodeList = () => {
    // SwalEdit.fire({
    //     title: 'Editar',
    //     html: `Actualizar nombre ${name}`,
    //     input: 'text',
    //     showCancelButton: true,
    //     confirmButtonText: 'Editar',
    //     showLoaderOnConfirm: true,
    //     preConfirm: (value) => {
    //         actions({ type: 'SET_NAME_NODE', payload: value });
    //         return value;
    //     },
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //         SwalEdit.fire(
    //             'Editado!',
    //             `Nombre: ${result.value}`,
    //             'success'
    //           )
    //       }
    //   });
}


const renderNode = eventOnClickNode => node => {
    const { id, name } = node;
    return (
        <li key={id}>
            <Node name={name} clickHandlerNode={handlerNodeList} clickHandlerFunction={handlerNodeList} secondary='secondary' />
        </li>
    );
}

const NodeList = ({ data, onClickNode }) => {
    return (
        <div className='container-list'>
            <ul>
                {
                    data.map(node => renderNode(onClickNode)(node))
                }
            </ul>
        </div>
      )
}

NodeList.propTypes = {
    data: PropTypes.array.isRequired,
    onClickNode: PropTypes.func.isRequired
}

export default NodeList;
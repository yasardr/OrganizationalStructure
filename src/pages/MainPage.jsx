import React from 'react'
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import AppFrame from '../components/AppFrame';
import Node from "../components/Node";
import { useNavigate } from 'react-router-dom';

const SwalEdit = withReactContent(Swal);

const MainPage = ({data, actions}) => {
    const { name, id } = data;
    const navigate = useNavigate();

    //Add node, delete node or collapse nodes
    const onClickHandler = icon => {
        if (icon === 'add') {
            // const obj = {
            //     name: '',
            //     departments: []
            // }
            // data.institutions.push(obj);
            // setItems(...items , obj);
        } else if (icon === 'remove') {
            actions({ type: 'REMOVE_NODE', payload: id });
        } else {
            navigate(`/${id}`);
        }
    }

    //Edit node name
    const handlerNode = () => {
        SwalEdit.fire({
            title: 'Editar',
            html: `Actualizar nombre ${name}`,
            input: 'text',
            showCancelButton: true,
            confirmButtonText: 'Editar',
            showLoaderOnConfirm: true,
            preConfirm: (value) => {
                actions({ type: 'SET_NAME_NODE', payload: value });
                return value;
            },
          }).then((result) => {
            if (result.isConfirmed) {
                SwalEdit.fire(
                    'Editado!',
                    `Nombre: ${result.value}`,
                    'success'
                  )
              }
          });
    }

    return (
        <AppFrame nodeMain={id} isHide={true} data={data}>
            <Node name={name} clickHandlerNode={handlerNode} clickHandlerFunction={onClickHandler} remove={ false } />
        </AppFrame>
    )
}

MainPage.propTypes = {
    data: PropTypes.object.isRequired,
    actions: PropTypes.func.isRequired
}

export default MainPage;
import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Node from "../components/Node";
import NodeList from "../components/NodeList";
import AppFrame from '../components/AppFrame';
import { useNavigate, useParams } from 'react-router-dom';
import { search, result, tracing } from '../services/search';

const SwalEdit = withReactContent(Swal);

const NodePage = ({data, actions}) => {
    const { name } = data;

    const navigate = useNavigate();
    let { id } = useParams();
    id = parseInt(id);

    console.log(data);
    search(id, data);
    console.log(result);
    console.log(tracing);
    let items = [];
    if (!tracing.length) {
        items = result.institutions;
    }

    //Add node, delete node or collapse nodes
    const onClickHandler = icon => {
        if (icon === 'add') {
            actions({ type: 'ADD_NODE', payload: id });
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
        <AppFrame nodeMain={id} data={data}>
            <Node name={name} clickHandlerNode={handlerNode} clickHandlerFunction={onClickHandler} remove={ false } />
            <NodeList data={items} actions={actions} onClickNode={onClickHandler}/>
        </AppFrame>
    )
}

NodePage.propTypes = {
  data: PropTypes.object.isRequired,
  actions: PropTypes.func.isRequired
}

export default NodePage;
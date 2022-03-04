import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Node from "../components/Node";
import NodeList from "../components/NodeList";
import AppFrame from '../components/AppFrame';
import { useNavigate, useParams } from 'react-router-dom';
import { search } from '../services/search';

const SwalEdit = withReactContent(Swal);

const NodePage = ({data, actions}) => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const navigate = useNavigate();
    let { id } = useParams();
    id = parseInt(id);

    console.log(data);

    useEffect(() => {
        const res = search(id, data);
        const {result} = res;
        if (result === null) {
           navigate('/NotFound/id');
        } else {
            setName(result.name);
            for (const key in result) {
                switch (key) {
                    case 'institutions':
                        setItems(result.institutions);
                        return;
                    case 'departments':
                        setItems(result.departments);
                        return;
                    case 'others':
                        setItems(result.others);
                        return;
                    case 'services':
                        setItems(result.services);
                        return;
                    case 'items':
                        setItems(result.items);
                        return;
                    default:
                        break;
                }
            }
        }
    }, [id, data, navigate]);

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
                actions({ type: 'SET_NAME_NODE', payload: {value, id} });
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

    const handlerNodeList = (id, data) => {
        let isObject = false;
        for (const key in data) {
            if ( typeof data[key] === 'object' ) {
                for (const k in data[key]) {
                    if (typeof data[key][k] === 'object' ) {
                        isObject = true;  
                    }
                }
            }
        }
        if (isObject)  navigate(`/${id}`);
    }

    return (
        <AppFrame nodeMain={id} data={data}>
            <Node name={name} clickHandlerNode={handlerNode} clickHandlerFunction={onClickHandler} remove={ id === 0 ? false : true} />
            <NodeList data={items} onClickNode={handlerNodeList}/>
        </AppFrame>
    )
}

NodePage.propTypes = {
  data: PropTypes.object.isRequired,
  actions: PropTypes.func.isRequired
}

export default NodePage;
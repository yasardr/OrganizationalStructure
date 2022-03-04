import React, { useReducer } from 'react';
import { BrowserRouter as Router,
        Routes,
        Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import NodePage from './pages/NodePage';
import NotFoundPage from './pages/NotFoundPage';
import Data from './data/Data';
import { search } from './services/search';

const App = () => {
    const initialValue = Data;

    const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_NAME_NODE':
                const { id: nodeId, value: newName } = action.payload;
                const { result: nodeSetName } = search(nodeId, state);
                nodeSetName.name = newName;
                return {...state};
            case 'ADD_NODE':
                const id = action.payload;
                const { result: nodeAddNode  } = search(id, state);
                for (const key in nodeAddNode) {
                    switch (key) {
                        case 'institutions':
                            nodeAddNode[key].push({
                                id: state.cont + 1,
                                name: '',
                                departments: []
                            });
                            return {...state};
                        case 'departments':
                            nodeAddNode[key].push({
                                id: state.cont + 1,
                                name: '',
                                others: []
                            });
                            return {...state};
                        case 'others':
                            nodeAddNode[key].push({
                                id: state.cont + 1,
                                name: '',
                                services: []
                            });
                            return {...state};
                        case 'services':
                            nodeAddNode[key].push({
                                id: state.cont + 1,
                                name: '',
                                items: []
                            });
                            return {...state};
                        case 'items':
                            nodeAddNode[key].push({
                                id: state.cont + 1,
                                name: '',
                                description: ''
                            });
                            return {...state};
                        default:
                            break;
                    }
                }
                return state;
            case 'REMOVE_NODE':
                console.log('Remove');
                return state;
            default:
                return state;
        }
    }
    
    const [state, dispatch] = useReducer(reducer, initialValue);

    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainPage data={state} actions={dispatch} />} />
                <Route path='/:id' element={<NodePage data={state} actions={dispatch} />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </Router>
    )
}

export default App;

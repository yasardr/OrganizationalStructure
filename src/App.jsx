import React, { useReducer } from 'react';
import { BrowserRouter as Router,
        Routes,
        Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import NodePage from './pages/NodePage';
import NotFoundPage from './pages/NotFoundPage';
import Data from './data/Data';
import { search, result, tracing } from './services/search';

const App = () => {
    const initialValue = Data;

    const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_NAME_NODE':
                //Verificar que se le cambie al correcto
                const newName = action.payload;
                return { ...state, name: newName }; 
            case 'ADD_NODE':
                const id = action.payload;
                search(id, state);
                if (tracing.length === 0) {
                    const newInstitute = [...state.institutions, {
                        id: state.cont + 1,
                        name: '',
                        departments: []
                    }];
                    return {...state, institutions: newInstitute, cont: state.cont + 1};
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

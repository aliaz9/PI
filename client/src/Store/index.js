import { createStore, applyMiddleware } from 'redux';
import reducer from '../Reducer/index'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; 

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);
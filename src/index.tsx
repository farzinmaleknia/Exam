import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './Components/App';
import { reducers } from './state/reducers';


const root = createRoot(document.querySelector('#root') as HTMLElement);

const store = createStore(reducers, {}, applyMiddleware(thunk))


root.render(
    <Provider store={store} >
        <App />
    </Provider >
)
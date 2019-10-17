import React from "react";
import ReactDOM from "react-dom";
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';

import App from "./components/App";
import reducers from './reducers';

const coomposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    coomposeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
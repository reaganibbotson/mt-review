import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { rootReducers } from './Reducers/index';
import './index.css';
import App from './Containers/App/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducers, applyMiddleware(thunk, logger));

ReactDOM.render(
	<Provider store={store}>
		<App /> 
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();

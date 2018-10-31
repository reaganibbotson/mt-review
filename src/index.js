import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { rootReducers } from './Reducers/index';
import './index.css';
import App from './Containers/App/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducers);

ReactDOM.render(
	<Provider store={store}>
		<App /> 
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();

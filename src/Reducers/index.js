import { combineReducers } from 'redux';
import { route } from './routing';
import { modal } from './modal';

export const rootReducers = combineReducers({
	route,
	modal
})
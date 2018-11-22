import { combineReducers } from 'redux';
import { route } from './routing';
import { modal } from './modal';
import { countryCard } from './countryCards';

export const rootReducers = combineReducers({
	route,
	modal,
	countryCard
})
import { combineReducers } from 'redux';
import { route } from './routing';
import { modal } from './modal';
import { countryCard, resortCard } from './Cards';

export const rootReducers = combineReducers({
	route,
	modal,
	countryCard,
	resortCard
})
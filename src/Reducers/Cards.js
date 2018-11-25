import * as countryCardActions from '../Actions/countryCards';
import * as resortCardActions from '../Actions/resortCards';

const initialCountryCardState = {
	countryCardPending: false,
	countryCardData: [],
	countryCardError: ''
}

export const countryCard = (state=initialCountryCardState, action={})=>{
	switch(action.type){
		case countryCardActions.REQUEST_COUNTRY_CARDS_PENDING:
			return Object.assign({}, state, {
				countryCardPending: true
			})
		case countryCardActions.REQUEST_COUNTRY_CARDS_SUCCESS:
			return Object.assign({}, state, {
				countryCardData: action.payload,
				countryCardPending: false
			})
		case countryCardActions.REQUEST_COUNTRY_CARDS_FAILED:
			return Object.assign({}, state, {
				countryCardError: action.payload,
				countryCardPending: false
			})
		default:
			return state
	}
}

const initialResortCardState = {
	resortCardPending: false,
	resortCardData: [],
	resortCardError: ''
}

export const resortCard = (state=initialResortCardState, action={})=>{
	switch(action.type){
		case resortCardActions.REQUEST_RESORT_CARDS_PENDING:
			return Object.assign({}, state, {
				resortCardPending: true
			})
		case resortCardActions.REQUEST_RESORT_CARDS_SUCCESS:
			return Object.assign({}, state, {
				resortCardData: action.payload,
				resortCardPending: false
			})
		case resortCardActions.REQUEST_RESORT_CARDS_FAILED:
			return Object.assign({}, state, {
				resortCardError: action.payload,
				resortCardPending: false
			})
		default:
			return state
	}
}
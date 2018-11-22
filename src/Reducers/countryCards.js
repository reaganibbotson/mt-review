import * as countryCardActions from '../Actions/countryCards';

const initialCardState = {
	countryCardPending: false,
	countryCardData: [],
	countryCardError: ''
}

export const countryCard = (state=initialCardState, action={})=>{
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
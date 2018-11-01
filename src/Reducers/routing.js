import * as routingActions from '../Actions/routing';

const initialRoute = {
	route: 'Home',
	countrySelection: '',
	resortSelection: ''
}

export const route = (state=initialRoute, action) => {
	switch(action.type){
		case routingActions.SET_ROUTE:
			if (action.text === 'Home'){
				return initialRoute
			}else{			
				return Object.assign({}, state, {
					route: action.text
				});
			}
		case routingActions.SET_COUNTRY:
			return Object.assign({}, state, {
				countrySelection: action.country.target.id
			});
		case routingActions.SET_RESORT:
			return Object.assign({}, state, {
				resortSelection: action.resort.target.id
			});
		default:
			return state;
	}
}

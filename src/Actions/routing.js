export const SET_ROUTE = 'SET_ROUTE';
export const SET_COUNTRY = 'SET_COUNTRY';
export const SET_RESORT = 'SET_RESORT';

export const setRoute = (text) => {
	console.log(text);
	return ({
		type: SET_ROUTE,
		text: text
	})
}

export const setCountry = (country) => {
	return ({
		type: SET_COUNTRY,
		country: country
	})
}

export const setResort = (resort) => {
	return ({
		type: SET_RESORT,
		resort: resort
	})
}
export const REQUEST_COUNTRY_CARDS_PENDING = 'REQUEST_COUNTRY_CARDS_PENDING';
export const REQUEST_COUNTRY_CARDS_SUCCESS = 'REQUEST_COUNTRY_CARDS_SUCCESS';
export const REQUEST_COUNTRY_CARDS_FAILED = 'REQUEST_COUNTRY_CARDS_FAILED';

export const getCountryCards = () => (dispatch) => {
	dispatch({ type: REQUEST_COUNTRY_CARDS_PENDING })
	fetch('https://mt-review-node.herokuapp.com/regions')
		.then(resp=> resp.json())
		.then(data => dispatch({ type: REQUEST_COUNTRY_CARDS_SUCCESS, payload: data }))
		.catch(err => dispatch({ type: REQUEST_COUNTRY_CARDS_FAILED, payload: err }))
}
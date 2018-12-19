export const REQUEST_RESORT_CARDS_PENDING = 'REQUEST_RESORT_CARDS_PENDING';
export const REQUEST_RESORT_CARDS_SUCCESS = 'REQUEST_RESORT_CARDS_SUCCESS';
export const REQUEST_RESORT_CARDS_FAILED = 'REQUEST_RESORT_CARDS_FAILED';

export const getResortCards = () => (dispatch, getState) => {
	const countrySelection = getState().route.countrySelection
	dispatch({ type: REQUEST_RESORT_CARDS_PENDING })
	fetch(`https://mt-review-node.herokuapp.com/resorts/${countrySelection}`)
		.then(resp=> resp.json())
		.then(data => dispatch({ type: REQUEST_RESORT_CARDS_SUCCESS, payload: data }))
		.catch(err => dispatch({ type: REQUEST_RESORT_CARDS_FAILED, payload: err }))
}
export const REQUEST_SIGNUP_PENDING = 'REQUEST_SIGNUP_PENDING';
export const REQUEST_SIGNUP_SUCCESS = 'REQUEST_SIGNUP_SUCCESS';
export const REQUEST_SIGNUP_FAILED = 'REQUEST_SIGNUP_FAILED';

export const signupUser = () => (dispatch, user) => {
	console.log(user);
	dispatch({ type: REQUEST_SIGNUP_PENDING })
	fetch(`https://mt-review-node.herokuapp.com/signup`, {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					email: user.email,
					username: user.username,
					password: user.password
				})
			})
		.then(resp=> resp.json())
		.then(respData=>{
			if(!respData.username){
				throw Error
			}
		})
		.then(data => dispatch({ type: REQUEST_SIGNUP_SUCCESS, payload: data }))
		.catch(err => dispatch({ type: REQUEST_SIGNUP_FAILED, payload: err }))
}
import * as modalActions from './modal';
import * as messageBoxActions from './messageBox';

export const REQUEST_SIGNUP_PENDING = 'REQUEST_SIGNUP_PENDING';
export const REQUEST_SIGNUP_SUCCESS = 'REQUEST_SIGNUP_SUCCESS';
export const REQUEST_SIGNUP_FAILED = 'REQUEST_SIGNUP_FAILED';
export const REQUEST_LOGIN_PENDING = 'REQUEST_LOGIN_PENDING';
export const REQUEST_LOGIN_SUCCESS = 'REQUEST_LOGIN_SUCCESS';
export const REQUEST_LOGIN_FAILED = 'REQEUST_LOGIN_FAILED';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

export const signupUser = (user) => (dispatch) => {
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
		console.log(respData);
		if(!respData.username){
			throw Error
		}
	})
	.then(data => {
		console.log(data);
		dispatch({ type: REQUEST_SIGNUP_SUCCESS, payload: user })
	})
	.then(data => {
		dispatch({type: modalActions.SET_MODAL, modal: ''})
		dispatch({type: messageBoxActions.SET_MESSAGE_BOX, payload: {message: 'Successfully signed up', colour: 'green', status: true}})
	}
	)
	.catch(err => {
		dispatch({ type: REQUEST_SIGNUP_FAILED, payload: err })
		dispatch({type: messageBoxActions.SET_MESSAGE_BOX, payload: {message: 'Problem signing up', colour: 'red', status: true}})
	})
};


export const logInUser = (user) => (dispatch) => {
	dispatch({ type:REQUEST_LOGIN_PENDING });
	fetch('https://mt-review-node.herokuapp.com/login', {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			email: user.email,
			password: user.password
		})
	})
	.then(response=>response.json())
	.then(data => dispatch({ type: REQUEST_LOGIN_SUCCESS, payload: data }))
	.then(()=>{
		dispatch({type: modalActions.SET_MODAL, modal: ''})
		dispatch({type: messageBoxActions.SET_MESSAGE_BOX, payload: {message: 'Successfully logged in', colour: 'green', status: true}})
	})
	.catch(err=>{
		dispatch({ type: REQUEST_LOGIN_FAILED, payload: err })
		dispatch({type: messageBoxActions.SET_MESSAGE_BOX, payload: {message: 'Problem logging in', colour: 'red', status: true}})
	})
};


export const signOutUser = () =>{
	return ({
		type: SIGN_OUT_USER
	})
};
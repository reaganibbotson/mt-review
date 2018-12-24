import * as userActions from '../Actions/user';

const initialUserState = {
	email:'',
    username:'',
    password: '',
    user_id:'',
    userLoading: false,
    userError: ''
}

export const userData = (state=initialUserState, action={}) =>{
	switch(action.type){
		case userActions.REQUEST_SIGNUP_PENDING || userActions.REQUEST_LOGIN_PENDING:
			return Object.assign({}, state, {
				userLoading: true
			})
		case userActions.REQUEST_SIGNUP_FAILED || userActions.REQUEST_LOGIN_FAILED:
			return Object.assign({}, state, {
				userLoading: false,
				userError: action.payload
			})
		case userActions.REQUEST_SIGNUP_SUCCESS:
			return Object.assign({}, state, {
				userLoading: false,
				username: action.payload.username,
				email: action.payload.email,
				password: action.payload.password
			})
		case userActions.REQUEST_LOGIN_SUCCESS:
			return Object.assign({}, state, {
				userLoading: false,
				username: action.payload.username,
				user_id: action.payload.user_id,
				email: action.payload.email
			})
		case userActions.SIGN_OUT_USER:
			return initialUserState
		default:
			return state;
	}
}
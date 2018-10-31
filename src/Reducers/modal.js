import * as modalActions from '../Actions/modal';

export const modal = (state={}, action)=>{
	switch(action.type){
		case modalActions.SET_MODAL:
			return Object.assign({}, state, {
				modal: action.modal
			})
		default:
			return state
	}
}
import * as messageBoxActions from '../Actions/messageBox';

const initialMessageBox = {
        msgbxStatus: false,
        msgbxMessage:'',
        msgbxColour:''
      }

export const messageBox = (state=initialMessageBox, action={}) =>{
	switch (action.type) {
		case messageBoxActions.SET_MESSAGE_BOX:
			return Object.assign({}, state, {
				msgbxStatus: action.payload.status,
		        msgbxMessage: action.payload.message,
		        msgbxColour: action.payload.colour
			})
		default:
			return state
	}
}
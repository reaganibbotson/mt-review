export const SET_MESSAGE_BOX = 'SET_MESSAGE_BOX'

export const showMessageBox = (message) =>{
	return({
		type: SET_MESSAGE_BOX,
		payload: message
	})
}
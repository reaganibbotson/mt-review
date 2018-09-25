import React from 'react';
import './MessageBox.css';

class MessageBox extends React.Component{

	render(){	
		let style = ''
		if(this.props.colour === 'green'){
			style = 'message-box green'
		} else {
			style = 'message-box red'
		}

		return(
			<div className={style}>
				{this.props.children}
			</div>
		);
	}
}

export default MessageBox;
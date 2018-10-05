import React from 'react';
import './MessageBox.css';
import { CSSTransition } from 'react-transition-group';

class MessageBox extends React.Component{
	componentDidUpdate(){
		setTimeout(()=>{
			this.props.setMessageBox('inactive','','green')
		}, 300)
	}

	render(){	
		return(
				<CSSTransition
					in={this.props.status==='active'}
					out={this.props.status==='inactive'}
					timeout={300}
					classNames="msg-box"
				>
					<div className={`message-box ${this.props.colour}`}>
						{this.props.message}
					</div>
				</CSSTransition>
		);
	}
}

export default MessageBox;
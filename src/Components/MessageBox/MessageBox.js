import React from 'react';
import './MessageBox.css';
import { CSSTransition } from 'react-transition-group';

class MessageBox extends React.Component{
	componentDidUpdate(){
		if(this.props.status){
			setTimeout(()=>{
				this.props.setMessageBox(false,'','')
			}, 3000)
		}
	}

	render(){
		return(
				<CSSTransition
					in={this.props.status}
					timeout={300}
					classNames="msg-box"
					key="msg-box"
				>
					<div className={`message-box ${this.props.colour}`}>
						{this.props.message}
					</div>
				</CSSTransition>
		);
	}
}

export default MessageBox;
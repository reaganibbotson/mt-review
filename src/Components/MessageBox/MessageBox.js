import React from 'react';
import './MessageBox.css';

class MessageBox extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			visible: true
		}
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({visible: false})
		}, 3000)
	}
	

	render(){	
		let style = ''
		if(this.props.colour === 'green'){
			style = 'message-box green'
		} else {
			style = 'message-box red'
		}

		return(
			this.state.visible &&
				<div className={style}>
					{this.props.children}
				</div>
		);
	}
}

export default MessageBox;
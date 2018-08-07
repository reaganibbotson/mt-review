import React from 'react';
import '../App/App.css';
import './ModalWindow.css';

class ModalWindow extends React.Component{
	constructor(props){
		super(props);

		this.state={
			fadeIn: true,
		}
	}

	componentDidMount(){
		setTimeout(()=>{
	      this.setState({ fadeIn: !this.state.fadeIn })
	    }, 100);
	};

	render(){
	    let fadeIn ='';
	    if(this.state.fadeIn){
	      fadeIn = 'faded'
	    }else{
	      fadeIn = 'faded in'
	    };

		return(
			<div className={`modal-window ${fadeIn}`}>
				<div className='close-button' onClick={()=>{this.props.changeRoute('Home')}}>X</div>
				<div className='modal'>
					{this.props.children}
				</div>			
			</div>
		);
	}

}

export default ModalWindow;
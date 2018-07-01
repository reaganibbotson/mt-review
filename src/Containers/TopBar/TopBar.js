import React from 'react';
import Title from '../../Components/Title/Title';
import SignupButton from '../../Components/SignupButton/SignupButton';
import '../App/App.css';

class TopBar extends React.Component{
	constructor(props){
    	super(props);
    	this.state = {
      		welcomeSlide: true,
    	}
  	}

  	componentDidMount(){
  		setTimeout(()=>{
  			this.setState({
  				welcomeSlide: false
  			})
  		}, 2000);
  	}

	render(){
		let topBarStyle;
		if(this.state.welcomeSlide){
			topBarStyle = 'background-top-bar'
		}else{
			topBarStyle = 'background-top-bar on'
		};

		return(
			<div className={topBarStyle}>
				<div className='button-pos'>
					<SignupButton Text="Signup" changeRoute={this.props.changeRoute} />
					<SignupButton Text="Login" changeRoute={this.props.changeRoute} />
				</div>
				<Title Text="Mt. Review" welcomeSlide={this.state.welcomeSlide} />
			</div>
		);
	}
}

export default TopBar;
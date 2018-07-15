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
		return(
			<div>
				<div className='background-top-bar on'>
					<div className='button-pos'>
						<SignupButton Text="Signup" changeRoute={this.props.changeRoute} />
						<SignupButton Text="Login" changeRoute={this.props.changeRoute} />
					</div>
					<Title Text="Mt. Review" welcomeSlide={this.state.welcomeSlide} />
				</div>
				<div className='page-padding'></div>
			</div>
		);
	}
}

export default TopBar;
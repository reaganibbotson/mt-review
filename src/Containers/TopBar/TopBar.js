import React from 'react';
import Title from '../../Components/Title/Title';
import SignupButton from '../../Components/SignupButton/SignupButton';
import '../App/App.css';

class TopBar extends React.Component{
	render(){
		return(
			<div>
				<div className='background-top-bar on'>
					<Title Text="Mt. Review" changeRoute={this.props.changeRoute}/>
					<div className='button-pos'>
						<SignupButton Text="Signup" changeRoute={this.props.changeRoute} />
						<SignupButton Text="Login" changeRoute={this.props.changeRoute} />
					</div>
				</div>
				<div className='page-padding'></div>
			</div>
		);
	}
}

export default TopBar;
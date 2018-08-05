import React from 'react';
import Title from '../Title/Title';
import SignupButton from '../SignupButton/SignupButton';
import '../../Containers/App/App.css';

function TopBar(props){
	return(
		<div>
			<div className='background-top-bar on'>
				<Title Text="Mt. Review" changeRoute={props.changeRoute}/>
				<div className='button-pos'>
					<SignupButton Text="Signup" changeRoute={props.changeRoute} />
					<SignupButton Text="Login" changeRoute={props.changeRoute} />
				</div>
			</div>
			<div className='page-padding'></div>
		</div>
	);
}


export default TopBar;
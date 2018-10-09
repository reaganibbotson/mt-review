import React from 'react';
import Title from '../Title/Title';
import SignupButton from '../SignupButton/SignupButton';
import './TopBar.css';

function TopBar(props){
	return(
		<div>
			<div className='background-top-bar'>
				<Title changeRoute={props.changeRoute}>Mt. Review</Title>
				{!props.loggedIn ?
						<div className='button-pos'>
							<SignupButton Text="Signup" changeModal={props.changeModal} />
							<SignupButton Text="Login" changeModal={props.changeModal} />
						</div>

					:
						<div className='button-pos'>
							<SignupButton Text="Sign Out" changeModal={props.changeModal} />
						</div>
					}
				</div>
			<div className='page-padding'></div>
		</div>
	);
}


export default TopBar;
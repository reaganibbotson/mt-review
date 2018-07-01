import React from 'react';
import './SignupButton.css';

function SignupButton(props){
	return(
		<div className='button' onClick={() => {props.changeRoute(props.Text)}} >
				{props.Text}
		</div>
	);
}

export default SignupButton;
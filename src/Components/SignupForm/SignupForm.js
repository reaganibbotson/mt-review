import React from 'react';
import './SignupForm.css';

function SignupForm(props){
	return(
		<div className='signup-form-container'>
			<div className='signup-title flex-center'>
				Signup To Mt Review
			</div>
			<div className='flex-center signup-form'>
				<div>
					<div>Email</div>
					<input type='email' placeholder='Enter your email here'/>	
				</div>
				<div>
					<div>Full Name</div>
					<input type="text" placeholder='Enter your name here'/>
				</div>
				<div>
					<div>Password</div>
					<input type="password"/>
				</div>
				<div className="flex-center buttons-container">
					<div className='signup-button'>Signup</div>
					<div className='signup-button cancel-button' onClick={()=>{props.changeRoute('Home')}}>Cancel</div>
				</div>

			</div>
		</div>
	);
}

export default SignupForm;
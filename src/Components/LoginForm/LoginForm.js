import React from 'react';
import './LoginForm.css';

function LoginForm(props){
	return(
		<div className='login-form-container'>
			<div className='login-title flex-center'>
				Login To Mt Review
			</div>
			<div className='login-form flex-center'>
				<div>
					<div>Email</div>
					<input type='email' placeholder='Enter your email here'/>	
				</div>
				<div>
					<div>Password</div>
					<input type="password"/>
				</div>
				<div className="flex-center buttons-container">
					<div className='login-button'>Login</div>
					<div className='login-button cancel-button'>Cancel</div>
				</div>

			</div>
		</div>
	);
}

export default LoginForm;
import React from 'react';

function SignOutForm(props){
	return(
		<div className='signup-form-container'>
				<div className='signup-title flex-center'>
					Are you sure you want to sign out?
				</div>
				<div className='flex-center signup-form'>
						<div className="flex-center buttons-container">
							<div className='signup-button' onClick={props.signOutUser}>Yes</div>
							<div className='signup-button cancel-button' onClick={()=>{props.changeModal('')}}>No</div>
						</div>
				</div>
			</div>
	);
}

export default SignOutForm;
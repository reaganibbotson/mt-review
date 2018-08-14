import React from 'react';
import './SignupForm.css';

class SignupForm extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			email:'',
			fullName:'',
			password:''
		}

		this.updateEmail = this.updateEmail.bind(this);
		this.updateFullName = this.updateFullName.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
	}

	updateEmail(e){
		this.setState({
			email: e.target.value
		})
	}

	updateFullName(e){
		this.setState({
			fullName: e.target.value
		})
	}

	updatePassword(e){
		this.setState({
			password: e.target.value
		})
	}

	render(){
		return(
			<div className='signup-form-container'>
				<div className='signup-title flex-center'>
					Signup To Mt Review
				</div>
				<div className='flex-center signup-form'>
						<div>
							<div>Email</div>
							<input autoFocus type='email' placeholder='Enter your email here' onChange={this.updateEmail}/>	
						</div>
						<div>
							<div>Full Name</div>
							<input type="text" placeholder='Enter your name here' onChange={this.updateFullName}/>
						</div>
						<div>
							<div>Password</div>
							<input type="password" placeholder='Enter your password here' onChange={this.updatePassword}/>
						</div>
						<div className="flex-center buttons-container">
							<div className='signup-button'>Signup</div>
							<div className='signup-button cancel-button' onClick={()=>{this.props.changeModal('')}}>Cancel</div>
						</div>
				</div>
			</div>
		);
	};
}

export default SignupForm;
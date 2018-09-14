import React from 'react';
import './SignupForm.css';

class SignupForm extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			email:'',
			username:'',
			password:''
		}

		this.updateEmail = this.updateEmail.bind(this);
		this.updateUsername = this.updateUsername.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	updateEmail(e){
		this.setState({
			email: e.target.value
		})
	}

	updateUsername(e){
		this.setState({
			username: e.target.value
		})
	}

	updatePassword(e){
		this.setState({
			password: e.target.value
		})
	}

	onSubmit(){
		fetch('https://mt-review-node.herokuapp.com/signup', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				username: this.state.username,
				password: this.state.password
			})
		})
		.then(response=>response.json())
		.then(user => {
			console.log
			this.props.changeModal('')
			if(user.user_id){
				this.props.logInUser();
			}
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
							<div>Userame</div>
							<input type="text" placeholder='Enter your username here' onChange={this.updateUsername}/>
						</div>
						<div>
							<div>Password</div>
							<input type="password" placeholder='Enter your password here' onChange={this.updatePassword}/>
						</div>
						<div className="flex-center buttons-container">
							<div className='signup-button' onClick={this.onSubmit}>Signup</div>
							<div className='signup-button cancel-button' onClick={()=>{this.props.changeModal('')}}>Cancel</div>
						</div>
				</div>
			</div>
		);
	};
}

export default SignupForm;
import React from 'react';
import './LoginForm.css';

class LoginForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: ''
		}
		this.updateEmail = this.updateEmail.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	updateEmail(e){
		this.setState({
			email: e.target.value
		})
	}

	updatePassword(e){
		this.setState({
			password: e.target.value
		})
	}

	onSubmit(){
		fetch('http://localhost:3000/login', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password
			})
		})
		.then(response=>response.json())
		.then(user => {
			console.log
			this.props.changeModal('')
		})
	}


	render(){
		return(
			<div className='login-form-container'>
				<div className='login-title flex-center'>
					Login To Mt Review
				</div>
				<div className='login-form flex-center'>
					<div>
						<div>Email</div>
						<input autoFocus type='email' placeholder='Enter your email here' onChange={this.updateEmail}/>	
					</div>
					<div>
						<div>Password</div>
						<input type="password" placeholder='Enter your password here' onChange={this.updatePassword}/>
					</div>
					<div className="flex-center buttons-container">
						<div className='login-button' onClick={this.onSubmit}>Login</div>
						<div className='login-button cancel-button' onClick={()=>{this.props.changeModal('')}}>Cancel</div>
					</div>

				</div>
			</div>
		);
	}
}

export default LoginForm;
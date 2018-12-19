import React from 'react';
import LoadingCover from '../LoadingCover/LoadingCover';
import './LoginForm.css';

class LoginForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '',
			style: '',
		}
		this.updateEmail = this.updateEmail.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onEnter = this.onEnter.bind(this);
	}

	updateEmail(e){
		this.setState({
			email: e.target.value
		})
		if(this.state.style === 'required-error'){
			this.setState({
				style: ''
			})
		}
	}

	updatePassword(e){
		this.setState({
			password: e.target.value
		})
		if(this.state.style === 'required-error'){
			this.setState({
				style: ''
			})
		}
	}

	onEnter(e){
		if(e.key === 'Enter'){
			this.onSubmit();
		}
	}

	onSubmit(){
		if(!this.state.email || !this.state.password){
			this.setState({
				style: 'required-error'
			})
			this.props.setMessageBox(true,'Fill in all required fields', 'red');
		}else{
			this.setState({
				style:'',
				loading: true
			})
			fetch('https://mt-review-node.herokuapp.com/login', {
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					email: this.state.email,
					password: this.state.password
				})
			})
			.then(response=>response.json())
			.then(user => {
				this.setState({loading: false})
				this.props.setMessageBox(true,'Problem logging in', 'red');
				if(user.user_id){
					this.props.setMessageBox(true, "Successfully logged in!", "green");
					console.log(user.user_id);
					this.props.changeModal('');
					this.props.logInUser(user);			
				}
			})
		}
	}


	render(){
		return(
			<div className='login-form-container'>
				<div className='login-title flex-center'>
					Login To Mt Review
				</div>
				<div className='login-form flex-center'>
				{this.state.loading &&
					<LoadingCover/>
				}
					<div>
						<div>Email</div>
						<input className={this.state.style} autoFocus type='email' placeholder='Enter your email here' onChange={this.updateEmail}/>	
					</div>
					<div>
						<div>Password</div>
						<input className={this.state.style} type="password" placeholder='Enter your password here' onChange={this.updatePassword} onKeyPress={this.onEnter}/>
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
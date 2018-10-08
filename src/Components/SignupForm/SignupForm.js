import React from 'react';
import LoadingCover from '../LoadingCover/LoadingCover';
import './SignupForm.css';

class SignupForm extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			email:'',
			username:'',
			password:'',
			style: '',
			loading: false
		}

		this.updateEmail = this.updateEmail.bind(this);
		this.updateUsername = this.updateUsername.bind(this);
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

	updateUsername(e){
		this.setState({
			username: e.target.value
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
		if(!this.state.email || !this.state.username || !this.state.password){
			this.setState({
				style: 'required-error'
			})
			this.props.setMessageBox(true,'Fill in all required fields', 'red');
		}else{
			this.setState({loading: true})
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
				this.setState({loading:false})
				console.log(user);
				this.props.changeModal('')
				this.props.setMessageBox(true,'Problem signing up', 'red');
				if(user.user_id){
					this.props.logInUser(user);
					this.props.setMessageBox(true, "Successfully signed up", "green");
				}
			})
		}
	}


	render(){
		return(
			<div className='signup-form-container'>
				<div className='signup-title flex-center'>
					Signup To Mt Review
				</div>
				<div className='flex-center signup-form'>
					{this.state.loading &&
						<LoadingCover/>
					}
					<div>
						<div>Email</div>
						<input className={this.state.style} autoFocus type='email' placeholder='Enter your email here' onChange={this.updateEmail}/>	
					</div>
					<div>
						<div>Userame</div>
						<input className={this.state.style} type="text" placeholder='Enter your username here' onChange={this.updateUsername}/>
					</div>
					<div>
						<div>Password</div>
						<input className={this.state.style} type="password" placeholder='Enter your password here' onChange={this.updatePassword} onKeyPress={this.onEnter}/>
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
import React from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../Actions/user';

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

		this.updateField = this.updateField.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	updateField(e){
		this.setState({
			[e.target.name]: e.target.value
		})
		if(this.state.style === 'required-error'){
			this.setState({
				style: ''
			})
		}
	}

	onSubmit(e){
		if(e.key === 'Enter'){
			if(!this.state.email || !this.state.username || !this.state.password){
				this.setState({
					style: 'required-error'
				})
				this.props.setMessageBox(true,'Fill in all required fields', 'red');
			}else{
				this.props.requestSignup(this.state);
				//need to make this wait for ^^ that thing to finish
				if(this.props.username){
					this.props.setMessageBox(true, "Successfully signed up", "green");
					this.props.changeModal('');
				}else{
					this.props.setMessageBox(true,'Problem signing up', 'red');
				}
			}
		}
	}


	render(){
		return(
			<div className='signup-form-container'>
				<div className='signup-title flex-center'>
					Signup To Mt Review
				</div>
				<div className='flex-center signup-form'>
					{this.props.userLoading &&
						<LoadingCover/>
					}
					<div>
						<div>Email</div>
						<input className={this.state.style} autoFocus type='email' placeholder='Enter your email here' name='email' onChange={this.updateField}/>	
					</div>
					<div>
						<div>Userame</div>
						<input className={this.state.style} type="text" placeholder='Enter your username here' name='username' onChange={this.updateField}/>
					</div>
					<div>
						<div>Password</div>
						<input className={this.state.style} type="password" placeholder='Enter your password here' name='password' onChange={this.updateField} onKeyPress={this.onSubmit}/>
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

const mapStateToProps = (state) =>{
	return({
		username: state.userData.username,
		email: state.userData.email,
		password: state.userData.password
	})
}

const mapDispatchToProps = (dispatch) =>{
	return({
		requestSignup: (user) => dispatch(userActions.signupUser(user))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
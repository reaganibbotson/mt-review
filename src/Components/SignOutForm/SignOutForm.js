import React from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../Actions/user';
import * as modalActions from '../../Actions/modal';

class SignOutForm extends React.Component{
	constructor(props){
		super(props);

		this.signOut = this.signOut.bind(this);
	}

	signOut(){
		this.props.signOutUser();
		this.props.setModal('');
	}

	render(){
		return(
			<div className='signup-form-container'>
				<div className='signup-title flex-center'>
					Are you sure you want to sign out?
				</div>
				<div className='flex-center signup-form'>
						<div className="flex-center buttons-container">
							<div className='signup-button' onClick={this.signOut}>Yes</div>
							<div className='signup-button cancel-button' onClick={()=>{this.props.changeModal('')}}>No</div>
						</div>
				</div>
			</div>
		);
	}
}


const mapDispatchToProps = (dispatch) =>{
	return({
		signOutUser: () => dispatch(userActions.signOutUser()),
		setModal: (modal) => dispatch(modalActions.setModal())
	})
}

export default connect(null, mapDispatchToProps)(SignOutForm);
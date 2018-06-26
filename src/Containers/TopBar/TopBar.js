import React from 'react';
import Title from '../../Components/Title/Title';
import '../App/App.css';

class TopBar extends React.Component{
	render(){
		return(
			<div className='background-top-bar'>

				<Title Text="Mt. Review" />
			</div>
		);
	}
}

export default TopBar;
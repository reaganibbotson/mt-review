import React from 'react';
import './LoadingPage.css';

class LoadingPage extends React.Component{
	render(){
		let loadPageStyle;
		if(this.props.imageLoaded){
			loadPageStyle = 'loading-page loaded'
		} else {
			loadPageStyle = 'loading-page'
		}
		return(
			<div className={loadPageStyle}>
				<h3>Welcome to...</h3>
				<h1>Mt Review</h1>
				<h4>We have reviews of mountains and shit.</h4>
			</div>
		);
	}
}

export default LoadingPage;
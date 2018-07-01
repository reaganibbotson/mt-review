import React from 'react';
import './Title.css';

function Title(props){
	let titleStyle;
	if(props.welcomeSlide){
		titleStyle = 'title-text'
	}else{
		titleStyle = 'title-text on'
	};

	return(
		<div className='snow-pic'>
			<h1 className={titleStyle}>
				{props.Text}
			</h1>
		</div>
	);
}

export default Title;
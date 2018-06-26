import React from 'react';
import './Title.css';

function Title(props){
	return(
		<div className='snow-pic'>
			<h1 className='title-text'>
				{props.Text}
			</h1>
		</div>
	);
}

export default Title;
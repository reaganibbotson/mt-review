import React from 'react';
import './Title.css';

function Title(props){
	return(
			<h1 className='title-text' onClick={() => {props.changeRoute('Home')}}>
				{props.children}
			</h1>
	);
}

export default Title;
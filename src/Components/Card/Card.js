import React from 'react';
import './Card.css';

function Card(props){
	let count = 0;
	const CountryList = props.Data.map((user, i)=>{
		count++
		//remove the if statement when we're mapping the actual list
		if(count<=6){
			return(
				<div className={`card card-${count}`} onClick={props.changeCountrySelection} key={i} id={i}>
					<p className='card-title'>{user.id}</p>
					<p className='card-content'>{user.name}</p>
				</div>
			);
		}
	});

	return CountryList
}

export default Card;
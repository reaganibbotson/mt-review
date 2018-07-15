import React from 'react';
import './Card.css';

function Card(props){
	let count = 0;
	const CountryList = props.Data.map((user, i)=>{
		count++
		return(
			<div className={`card card-${count}`} onClick={props.changeCountrySelection} key={i} id={i}>
				<p>{user.id}</p>
				<p>{user.name}</p>
			</div>
		);
	});

	return CountryList
}

export default Card;
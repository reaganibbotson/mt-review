import React from 'react';
import './Card.css';

function Card(props){
	const CountryList = props.Data.map((user)=>{
		<div>
			{user.id}
		</div>
	});

	return CountryList;
}

export default Card;
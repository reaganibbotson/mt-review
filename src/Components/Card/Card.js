import React from 'react';
import './Card.css';

function Card(props){
	const CountryList = props.Data.map((user, i)=>{
		return(
			<div className='card' onClick={props.changeCountrySelection} key={i} id={i}>
				{user.id}
				{user.name}
			</div>
		);
	});

	return (
		<div>
			{CountryList}
		</div>
	);
}

export default Card;
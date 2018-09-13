import React from 'react';
import './Card.css';

function Card(props){

	const CountryList = props.Data.map((card, i)=>{

		return(
			<div className={`card`} onClick={props.changeSelection} key={i} id={card.resort_id}>
				<div className='card-title'>
					<p>{card.resort}</p>
				</div>
				<div className='card-content'>
					<p>{card.resort}</p>
				</div>
			</div>
		);
	});
	
	return CountryList
}

export default Card;
import React from 'react';
import './Card.css';

function Card(props){
	let count = 0;

	const CountryList = props.Data.map((card, i)=>{
		//tick count
		count++

		//remove the if statement when we're mapping the actual list
		//if(count<=limit){
			return(
				<div className={`card`} onClick={props.changeSelection} key={i} id={card.resort_name}>
					<div className='card-title'>
						<p>{card.resort_id}</p>
					</div>
					<div className='card-content'>
						<p>{card.resort_name}</p>
					</div>
				</div>
			);
		//}
	});

	return CountryList
}

export default Card;
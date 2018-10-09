import React from 'react';
import '../CountryCard/CountryCard.css';

function ResortCard(props){
	
	const ResortList = props.Data.map((card, i)=>{

		return(
			<div className={`card`} key={i}>
				<div className='card-clicker' id={card.resort_id} onClick={props.changeSelection}></div>
				<div className='card-title'>
					<p>{card.resort_name}</p>
				</div>
				<div className='card-content'>
					<p>{card.resort_name}</p>
				</div>
			</div>
		);
	});
	
	return ResortList
}

export default ResortCard;
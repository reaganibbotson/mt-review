import React from 'react';
import '../CountryCard/CountryCard.css';

function ResortCard(props){
	
	const ResortList = props.Data.map((card, i)=>{

		return(
			<div className={`card`} onClick={props.changeSelection} key={i} id={card.resort_id}>
				<div className='card-title'>
					<p>{card.resort_name}</p>
				</div>
				<div>
					<p>{card.resort_name}</p>
				</div>
			</div>
		);
	});
	
	return ResortList
}

export default ResortCard;
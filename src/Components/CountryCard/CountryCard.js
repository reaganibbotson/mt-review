import React from 'react';	
import './CountryCard.css';

 function CountryCard(props){	
 	const CountryList = props.countryData.map((card, i)=>{	
		return(
			<div className={`card`} key={i}>
				<div className='card-clicker' id={card.region} onClick={props.changeSelection}></div>
				<div className='card-title'>	
					<p>{card.region}</p>	
				</div>	
				<div className='card-content'>
					<p>{card.region}</p>	
				</div>	
			</div>	
		);	
	});	
		
	return CountryList	
}	
 export default CountryCard; 
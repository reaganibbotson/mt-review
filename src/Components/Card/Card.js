import React from 'react';
import './Card.css';

function Card(props){
	let count = 0;
	
	const CountryList = props.Data.map((user, i)=>{
		count++
		//remove the if statement when we're mapping the actual list
		//if(count<=6){
			return(
				<div className={`card card-${count}`} onClick={props.changeSelection} key={i} id={user.name}>
					<div className='card-title'>
						<p>{user.id}</p>
					</div>
					<div className='card-content'>
						<p>{user.name}</p>
					</div>
				</div>
			);
		//}
	});

	return CountryList
}

export default Card;
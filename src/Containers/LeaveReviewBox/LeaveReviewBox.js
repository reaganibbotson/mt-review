import React from 'react';
import Rating from 'react-rating';
import './LeaveReviewBox.css';


class LeaveReviewBox extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			overallRating:0,
			powderRating:0,
			crowdRating:0,
			villageRating:0,
			priceRating:0,
		}
	}

	render(){
		return(
			<div>
				<Rating initialRating={0}/>
			</div>
		);
	}
}

export default LeaveReviewBox;
import React from 'react';
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
	};

	render(){
		return(
			<div>
				
				{this.state.overallRating}
			</div>
		);
	}
}

export default LeaveReviewBox;
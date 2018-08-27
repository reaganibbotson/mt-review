import React from 'react';
import './LeaveReviewBox.css';
import ReactStars from 'react-stars'




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

		this.overallRatingChanged = this.overallRatingChanged.bind(this);
		this.powderRatingChanged = this.powderRatingChanged.bind(this);
		this.crowdRatingChanged = this.crowdRatingChanged.bind(this);
		this.villageRatingChanged = this.villageRatingChanged.bind(this);
		this.priceRatingChanged = this.priceRatingChanged.bind(this);
	
	};


	overallRatingChanged(newRating){
		this.setState({overallRating:newRating})
	}

	powderRatingChanged(newRating){
		this.setState({powderRating:newRating})
	}

	crowdRatingChanged(newRating){
		this.setState({crowdRating:newRating})
	}

	villageRatingChanged(newRating){
		this.setState({villageRating:newRating})
	}

	priceRatingChanged(newRating){
		this.setState({priceRating:newRating})
	}

	render(){
		return(
			<div className='leave-component-wrapper'>
				<div className='leave-reviews-wrapper'>
					<div className='review-stars'>
						<label>Overall Rating</label>
						<ReactStars count={5} onChange={this.overallRatingChanged} size={50} color2={'#ffd700'} value={this.state.overallRating} />
					</div>

					<div className='review-stars'>
						<label>Powder Rating</label>
						<ReactStars count={5} onChange={this.powderRatingChanged} size={50} color2={'#ffd700'} value={this.state.powderRating} />
					</div>

					<div className='review-stars'>
						<label>Crowd Rating</label>
						<ReactStars count={5} onChange={this.crowdRatingChanged} size={50} color2={'#ffd700'} value={this.state.crowdRating} />
					</div>

					<div className='review-stars'>
						<label>Village Rating</label>
						<ReactStars count={5} onChange={this.villageRatingChanged} size={50} color2={'#ffd700'} value={this.state.villageRating} />
					</div>

					<div className='review-stars'>
						<label>Price Rating</label>
						<ReactStars count={5} onChange={this.priceRatingChanged} size={50} color2={'#ffd700'} value={this.state.priceRating} />
					</div>				
				</div>
				<div className='submit-review-btn'>
					Submit Review
				</div>			
			</div>
		);
	}
}

export default LeaveReviewBox;
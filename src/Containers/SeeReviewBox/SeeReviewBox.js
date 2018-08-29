import React from 'react';
import './SeeReviewBox.css';
import ReactStars from 'react-stars'


class SeeReviewBox extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			overallRating:4.5,
			powderRating:4,
			crowdRating:5,
			villageRating:5,
			priceRating:4.5,
		}	
	};

	render(){
		return(
			<div className='see-component-wrapper'>
				<div className='see-reviews-wrapper'>
					<div className='review-stars'>
						<label>Overall Rating</label>
						<ReactStars count={5} size={40} color2={'#ffd700'} value={this.state.overallRating} />
					</div>

					<div className='review-stars'>
						<label>Powder Rating</label>
						<ReactStars count={5} size={40} color2={'#ffd700'} value={this.state.powderRating} />
					</div>

					<div className='review-stars'>
						<label>Crowd Rating</label>
						<ReactStars count={5} size={40} color2={'#ffd700'} value={this.state.crowdRating} />
					</div>

					<div className='review-stars'>
						<label>Village Rating</label>
						<ReactStars count={5} size={40} color2={'#ffd700'} value={this.state.villageRating} />
					</div>

					<div className='review-stars'>
						<label>Price Rating</label>
						<ReactStars count={5} size={40} color2={'#ffd700'} value={this.state.priceRating} />
					</div>				
				</div>		
			</div>
		);
	}
}

export default SeeReviewBox;
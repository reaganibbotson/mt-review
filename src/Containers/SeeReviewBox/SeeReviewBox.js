import React from 'react';
import './SeeReviewBox.css';
import ReactStars from 'react-stars'


function SeeReviewBox (props){
	return(
		<div className='see-component-wrapper'>
			<div className='see-reviews-wrapper'>
				<div className='review-stars'>
					<label>Overall Rating</label>
					<ReactStars 
						count={5} 
						size={40} 
						color2={'#ffd700'} 
						value={props.reviewData.overallRating}
						edit={false}
					/>
				</div>

				<div className='review-stars'>
					<label>Powder Rating</label>
					<ReactStars 
						count={5} 
						size={40} 
						color2={'#ffd700'} 
						value={props.reviewData.powderRating}
						edit={false}
					/>
				</div>

				<div className='review-stars'>
					<label>Crowd Rating</label>
					<ReactStars 
						count={5} 
						size={40} 
						color2={'#ffd700'} 
						value={props.reviewData.crowdRating}
						edit={false}
					/>
				</div>

				<div className='review-stars'>
					<label>Village Rating</label>
					<ReactStars 
						count={5} 
						size={40} 
						color2={'#ffd700'} 
						value={props.reviewData.villageRating}
						edit={false}
					/>
				</div>

				<div className='review-stars'>
					<label>Price Rating</label>
					<ReactStars 
						count={5} 
						size={40} 
						color2={'#ffd700'} 
						value={props.reviewData.priceRating}
						edit={false}
					/>
				</div>				
			</div>		
		</div>
	);
}

export default SeeReviewBox;
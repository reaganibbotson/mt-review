import React from 'react';
import './SeeReviewBox.css';
import ReactStars from 'react-stars'


class SeeReviewBox extends React.Component{
	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		overallRating: 0,
	// 		powderRating: 0,
	// 		crowdRating: 0,
	// 		villageRating: 0,
	// 		priceRating: 0
	// 	}
	// }

	// componentDidMount(){
	// 	console.log(`See review box: ${this.props.resortData.resort_id}`);
	// 	fetch(`https://mt-review-node.herokuapp.com/see-review`,{
	// 			method:'post',
	// 			headers:{'Content Type':'application/json'},
	// 			body: JSON.stringify({
	// 				resort_id: this.props.resortData.resort_id
	// 			})
	// 		})
	// 		.then(response => response.json())
	// 		.then(data=>{
	// 			this.setState({
	// 				overallRating: data.total_score,
	// 				powderRating: data.powder_score,
	// 				crowdRating: data.crowd_score,
	// 				villageRating: data.village_score,
	// 				priceRating: data.price_score
	// 			})
	// 		})
	// 		.catch(err=> console.log(`Couldn't retrieve reviews: ${err}`))
	// }

	render(){
		return(
			<div className='see-component-wrapper'>
				<div className='see-reviews-wrapper'>
					<div className='review-stars'>
						<label>Overall Rating</label>
						<ReactStars count={5} size={40} color2={'#ffd700'} value={this.props.resortData.overallRating} />
					</div>

					<div className='review-stars'>
						<label>Powder Rating</label>
						<ReactStars count={5} size={40} color2={'#ffd700'} value={this.props.resortData.powderRating} />
					</div>

					<div className='review-stars'>
						<label>Crowd Rating</label>
						<ReactStars count={5} size={40} color2={'#ffd700'} value={this.props.resortData.crowdRating} />
					</div>

					<div className='review-stars'>
						<label>Village Rating</label>
						<ReactStars count={5} size={40} color2={'#ffd700'} value={this.props.resortData.villageRating} />
					</div>

					<div className='review-stars'>
						<label>Price Rating</label>
						<ReactStars count={5} size={40} color2={'#ffd700'} value={this.props.resortData.priceRating} />
					</div>				
				</div>		
			</div>
		);
	}
}

export default SeeReviewBox;
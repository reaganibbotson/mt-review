import React from 'react';
import './LeaveReviewBox.css';
import ReactStars from 'react-stars'


class LeaveReviewBox extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			total_score:0,
			powder_score:0,
			crowd_score:0,
			village_score:0,
			price_score:0,
		}

		this.total_scoreChanged = this.total_scoreChanged.bind(this);
		this.powder_scoreChanged = this.powder_scoreChanged.bind(this);
		this.crowd_scoreChanged = this.crowd_scoreChanged.bind(this);
		this.village_scoreChanged = this.village_scoreChanged.bind(this);
		this.price_scoreChanged = this.price_scoreChanged.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	
	};


	total_scoreChanged(newRating){
		this.setState({total_score:newRating})
	}

	powder_scoreChanged(newRating){
		this.setState({powder_score:newRating})
	}

	crowd_scoreChanged(newRating){
		this.setState({crowd_score:newRating})
	}

	village_scoreChanged(newRating){
		this.setState({village_score:newRating})
	}

	price_scoreChanged(newRating){
		this.setState({price_score:newRating})
	}

	onSubmit(){
		if(this.state.total_score===0){
			alert(`You haven't filled in all the required fields.`)
		}else if(!this.props.userData.user_id){
			alert('Must be logged in to leave review.')
		}else{
			fetch('https://mt-review-node.herokuapp.com/leavereview', {
				method: 'put',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					user_id: this.props.userData.user_id,
					resort_id: this.props.resortSelection,
					total_score: this.state.total_score,
					powder_score: this.state.powder_score,
					crowd_score: this.state.crowd_score,
					village_score: this.state.village_score,
					price_score: this.state.price_score
				})
			})
			.then(resp=>{
				if(resp.ok){
					resp.json()
				}else{
					alert('Server error.')
				}
			})
			.then(resp=>{
					alert('Review submitted successfully.')
					this.setState({
						total_score: 0,
						powder_score: 0,
						crowd_score: 0,
						village_score: 0,
						price_score: 0
					})
			})
			.catch(err=>{
				console.log(err);
				alert('Error submitting review.')
			})
		}
	}	

	render(){
		return(
			<div className='leave-component-wrapper'>
				<div className='leave-reviews-wrapper'>
					<div className='review-stars'>
						<label>Overall Rating</label>
						<ReactStars 
							count={5} 
							onChange={this.total_scoreChanged} 
							size={40} 
							color2={'#ffd700'} 
							value={this.state.total_score} 
						/>
					</div>

					<div className='review-stars'>
						<label>Powder Rating</label>
						<ReactStars 
							count={5} 
							onChange={this.powder_scoreChanged}
							size={40}
							color2={'#ffd700'}
							value={this.state.powder_score} 
						/>
					</div>

					<div className='review-stars'>
						<label>Crowd Rating</label>
						<ReactStars 
							count={5} 
							onChange={this.crowd_scoreChanged} 
							size={40} 
							color2={'#ffd700'} 
							value={this.state.crowd_score} 
						/>
					</div>

					<div className='review-stars'>
						<label>Village Rating</label>
						<ReactStars 
							count={5} 
							onChange={this.village_scoreChanged} 
							size={40} 
							color2={'#ffd700'} 
							value={this.state.village_score} 
						/>
					</div>

					<div className='review-stars'>
						<label>Price Rating</label>
						<ReactStars 
							count={5} 
							onChange={this.price_scoreChanged} 
							size={40} 
							color2={'#ffd700'} 
							value={this.state.price_score} 
						/>
					</div>				
				</div>
				<div className='submit-review-btn' onClick={this.onSubmit}>
					Submit Review
				</div>			
			</div>
		);
	}
}

export default LeaveReviewBox;
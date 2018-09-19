import React from 'react';
import LeaveReviewBox from '../LeaveReviewBox/LeaveReviewBox';
import SeeReviewBox from '../SeeReviewBox/SeeReviewBox';
import './ResortPage.css';

class ResortPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			leaveReview:false,
			loadReviews: false,
			reviewData:{
				overallRating: 0,
				powderRating: 0,
				crowdRating: 0,
				villageRating: 0,
				priceRating: 0
			}
		}

	}

	changeReviewBox = (newState) => {
		this.setState({leaveReview: newState});
	}

	componentDidMount(){
		fetch(`https://mt-review-node.herokuapp.com/resort/${this.props.resortSelection}`)
		.then(resp=>resp.json())
		.then(data=>{
			console.log(data.total_score);
			this.setState({
				reviewData:{
					overallRating:data.total_score,
					powderRating: data.powder_score,
					crowdRating: data.crowd_score,
					villageRating: data.village_score,
					priceRating: data.price_score
				}
			})
			this.props.loadResortData(data);
		})
		.catch(err=>console.log)
	}


	render(){
		
		let leaveReviewTabStyle = 'review-btns'
		let seeReviewTabStyle = 'review-btns'

		if(this.state.leaveReview){
			leaveReviewTabStyle = 'review-btns active-review-btn'
		}else{
			seeReviewTabStyle = 'review-btns active-review-btn'
		};

		return(
			<div className='flex-centred'>
				<h1>
					{this.props.resortData.resort_name}
				</h1>
				<div className='grid'>
					<div className='full-grid-row row2'>
						<p>Insert image/s here? {this.props.resortData.resort_id}</p>
					</div>
					<div className='centred-grid-row row3'>
						<p>Insert description/blurb here.</p>
					</div>
					<div className='review-system-wrapper centred-grid-row row4'>
						<div className='review-btn-wrapper'>
							<div className={seeReviewTabStyle} onClick={()=>this.changeReviewBox(false)}>Reviews</div>
							<div className={leaveReviewTabStyle} onClick={()=>this.changeReviewBox(true)}>Leave a Review</div>
						</div>
						{this.state.leaveReview === false ?
							<SeeReviewBox resortData={this.props.resortData} reviewData={this.state.reviewData}/>
						:
							<LeaveReviewBox userData={this.props.userData} resortData={this.props.resortData}/>
						}
					</div>
				</div>
			</div>
		);
	}
}

export default ResortPage;
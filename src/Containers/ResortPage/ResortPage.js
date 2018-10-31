import React from 'react';
import LeaveReviewBox from '../LeaveReviewBox/LeaveReviewBox';
import SeeReviewBox from '../SeeReviewBox/SeeReviewBox';
import axios from 'axios'
import './ResortPage.css';

class ResortPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			leaveReview:false,
			resortData: {
				resort_id: 0,
				resort_name: ''
			},
			reviewData:{
				overallRating: 0,
				powderRating: 0,
				crowdRating: 0,
				villageRating: 0,
				priceRating: 0
			}
		}
		this.fileInput = React.createRef()
	}

	uploadFile = (event) => {
		event.preventDefault();
		const data = new FormData();
		data.append('file', this.fileInput.current.files[0]);
		data.append('filename', this.fileInput.current.value);
		data.append('resort_id', this.state.resortData.resort_id);
		axios.post('https://mt-review-node.herokuapp.com/uploadFile', data)
		.then(resp => console.log)
		.catch(err=> console.log('Shit: ' + err))
	}

	changeReviewBox = (newState) => {
		this.setState({leaveReview: newState});
	}

	componentDidMount(){
		fetch(`https://mt-review-node.herokuapp.com/resort/${this.props.resortSelection}`)
		.then(resp=>resp.json())
		.then(data=>{
			console.log(`The total score of ${data.resort_name} is ${data.total_score}.`);
			this.setState({
				reviewData:{
					overallRating:data.total_score,
					powderRating: data.powder_score,
					crowdRating: data.crowd_score,
					villageRating: data.village_score,
					priceRating: data.price_score
				}
			})
			this.setState({
				resortData:{
					resort_id: data.resort_id,
					resort_name: data.resort_name
				}
			});
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
				<form onSubmit={this.uploadFile}>
					<input type="file" ref={this.fileInput}/>
					<input type="submit"/>
				</form>
				<h1>
					{this.state.resortData.resort_name}
				</h1>
				<div className='grid'>
					<div className='full-grid-row row2'>
						<p>Insert image/s here? {this.state.resortData.resort_id}</p>
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
							<SeeReviewBox 
								resortData={this.state.resortData} 
								reviewData={this.state.reviewData}
							/>
						:
							<LeaveReviewBox 
								userData={this.props.userData} 
								resortData={this.state.resortData} 
								resortSelection={this.props.resortSelection}
								setMessageBox={this.props.setMessageBox}
							/>
						}
					</div>
				</div>
			</div>
		);
	}
}

export default ResortPage;
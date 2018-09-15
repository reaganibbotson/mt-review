import React from 'react';
import LeaveReviewBox from '../LeaveReviewBox/LeaveReviewBox';
import SeeReviewBox from '../SeeReviewBox/SeeReviewBox';
import './ResortPage.css';

class ResortPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			leaveReview:false,
		}

	}

	changeReviewBox = (newState) => {
		this.setState({leaveReview: newState});
	}

	componentDidMount(){
		fetch(`https://mt-review-node.herokuapp.com/resort/${this.props.resortSelection}`)
		.then(resp=>resp.json())
		.then(data=>{
			this.props.loadResortData(data);
			console.log(data);
		})
		.catch(err=>console.log);
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
						<p>Insert image/s here?</p>
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
							<SeeReviewBox resortData={this.props.resortData} />
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
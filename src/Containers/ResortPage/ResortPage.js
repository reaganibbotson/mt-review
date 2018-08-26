import React from 'react';
import LeaveReviewBox from '../LeaveReviewBox/LeaveReviewBox';
import './ResortPage.css';

class ResortPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data:'',
			leaveReview:false,
		}

	}

	changeReviewBox = (newState) => {
		this.setState({leaveReview: newState});
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(resp => resp.json())
		.then(respJson =>{
			const displayResort = respJson.filter((resort)=>{
				return resort.name === this.props.resortSelection
			})
			this.setState({data: displayResort[0]})
			console.log(displayResort[0]);
		})
	}

	render(){
		
		let leaveReviewTabStyle = ''
		let seeReviewTabStyle = ''

		if(!this.state.leaveReview){

		}else{

		};

		return(
			<div className='flex-centred'>
				<h1>
					{this.state.data.name}
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
							<div className='review-btns see-review-btn' onClick={()=>this.changeReviewBox(false)}>Reviews</div>
							<div className='review-btns leave-review-btn' onClick={()=>this.changeReviewBox(true)}>Leave a Review</div>
						</div>
						{this.state.leaveReview === false ?
							<p>Insert current reviews component here.</p>
						:
							<LeaveReviewBox/>
						}
					</div>
				</div>
			</div>
		);
	}
}

export default ResortPage;
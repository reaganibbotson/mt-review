import React from 'react';
import './ResortPage.css';

class ResortPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data:'',
			leaveReview:false,
		}
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
		return(
			<div className='flex-centred'>
				<h1>
					{this.state.data.name}
				</h1>
				<div className='grid'>
					<div className='full-grid-row row2'>
						<p>Insert image here?</p>
					</div>
					<div className='centred-grid-row row3'>
						<p>Insert description/blurb here.</p>
					</div>
					<div className='review-system-wrapper centred-grid-row row4'>
						{this.state.leaveReview === false ?
							<p>Insert current reviews component here.</p>
						:
							<p>Insert leave a review component here.</p>
						}
					</div>
				</div>
			</div>
		);
	}
}

export default ResortPage;
import React from 'react';
import './ResortPage.css';

class ResortPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data:[],
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(resp => resp.json())
		.then(respJson =>{
			const displayResort = respJson.filter((resort)=>{
				return resort.name === this.props.resortSelection
			})
			this.setState({data: displayResort})
			console.log(displayResort);
			
		})
	}

	render(){
		return(
			<div>
				<h1>
					{this.state.data.id}
				</h1>
			</div>
		);
	}
}

export default ResortPage;
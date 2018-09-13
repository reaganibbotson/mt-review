import React from 'react';
import '../CountryCards/CountryCards.css';
import Card from '../../Components/Card/Card';

class ResortCards extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			data: [],
		}
	}

	componentDidMount(){
		fetch(`https://localhost:3000/resorts:${this.props.countrySelection}`)
			.then(resp=> resp.json())
			.then((respJson) => {
				this.setState({ data: respJson })
				console.log(respJson)
			}
		);
	}

	render(){
		return(
			<div>
				<div className='intro-text'>
					<h2>{this.props.CountrySelection}</h2>
					<h3>Click a resort to see more info!</h3>
				</div>
				<div className='flex-on-em spacing'>
					<Card Data={this.state.data} changeSelection={this.props.changeSelection} countrySelection={this.props.countrySelection}/>
				</div>
			</div>
		);
	}
}

export default ResortCards;
import React from 'react';
import './CountryCards.css';
import Card from '../../Components/Card/Card';

class CountryCards extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			data: [],
			countrySelection: '',
		}

		this.changeCountrySelection = this.changeCountrySelection.bind(this);
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(resp=> resp.json())
			.then((data) => { this.setState({ data: data })})
	}

	changeCountrySelection(e){
		this.setState({ countrySelection: e.target.id })
	}

	render(){
		return(
			<div>
				<Card countrySelection={this.state.countrySelection} Data={this.state.data} />
			</div>
		);
	}
}

export default CountryCards;
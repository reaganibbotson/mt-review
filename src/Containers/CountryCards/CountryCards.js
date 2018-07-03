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

	componentWillMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(resp=> resp.json())
			.then((resp) => { this.setState({ data: resp })})
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
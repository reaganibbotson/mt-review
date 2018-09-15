import React from 'react';
import './CountryCards.css';
import CountryCard from '../../Components/CountryCard/CountryCard';

class CountryCards extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			data: [],
		}
	}

	componentDidMount(){
		fetch('https://mt-review-node.herokuapp.com/regions')
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
					<h2>Planning a ski trip?</h2>
					<h3>Mt Review is here to help! Pick your destination.</h3>
				</div>
				<div className='flex-on-em spacing'>
					<CountryCard Data={this.state.data} changeSelection={this.props.changeSelection} />
				</div>
			</div>
		);
	}
}

export default CountryCards;
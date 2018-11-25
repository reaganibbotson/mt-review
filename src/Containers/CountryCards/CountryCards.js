import React from 'react';
import { connect } from 'react-redux';
import './CountryCards.css';
import CountryCard from '../../Components/CountryCard/CountryCard';

import * as countryCardActions from '../../Actions/countryCards';

class CountryCards extends React.Component{
	componentDidMount(){
		this.props.getCountryCards();
	}

	render(){
		return(
			<div>
				<div className='intro-text'>
					<h2>Planning a ski trip?</h2>
					<h3>Mt Review is here to help! Pick your destination.</h3>
				</div>
				<div className='flex-on-em spacing'>
					<CountryCard 
						countryData={this.props.countryCardData} 
						changeSelection={this.props.changeSelection}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return ({
		countryCardData: state.countryCard.countryCardData,
		countryCardError: state.countryCard.countryCardError,
		countryCardPending: state.countryCard.countryCardPending
	})
}

const mapDispatchToProps = (dispatch) => {
	return {
		getCountryCards: ()=> dispatch(countryCardActions.getCountryCards())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryCards);
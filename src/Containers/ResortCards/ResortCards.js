import React from 'react';
import { connect } from 'react-redux';
import '../CountryCards/CountryCards.css';
import ResortCard from '../../Components/ResortCard/ResortCard';

import * as resortCardActions from '../../Actions/resortCards';

class ResortCards extends React.Component{
	componentDidMount(){
		this.props.getResortCards()
	}

	render(){
		return(
			<div>
				<div className='intro-text'>
					<h2>{this.props.CountrySelection}</h2>
					<h3>Click a resort to see more info!</h3>
				</div>
				<div className='flex-on-em spacing'>
					<ResortCard 
						Data={this.props.resortCardData} 
						changeSelection={this.props.changeSelection} 
						countrySelection={this.props.countrySelection}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return ({
		resortCardData: state.resortCard.resortCardData,
		resortCardError: state.resortCard.resortCardError,
		resortCardPending: state.resortCard.resortCardPending
	})
}

const mapDispatchToProps = (dispatch) => {
	return {
		getResortCards: () => dispatch(resortCardActions.getResortCards())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ResortCards);
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router';
import TopBar from '../TopBar/TopBar';
import CountryCards from '../CountryCards/CountryCards';
import LoadingPage from '../../Components/LoadingPage/LoadingPage';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      route:'Home',
      imageLoaded: true,
      fadeIn: true,
    }

    this.changeImageLoaded = this.changeImageLoaded.bind(this); 
    this.changeCountrySelection = this.changeCountrySelection.bind(this);
  }

  changeRoute = (newRoute) => {
    this.setState({
      route: newRoute
    })
  }

  changeCountrySelection(e){
    this.setState({ countrySelection: e.target.id })
  }


  changeImageLoaded(){
    this.setState({ imageLoaded: true })
    console.log('Image loaded');
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({ fadeIn: !this.state.fadeIn })
    }, 100);
  }

  render() {
    let fadeIn ='';
    if(this.state.fadeIn){
      fadeIn = 'faded'
    }else{
      fadeIn = 'faded in'
    }

    return (
      <div className="App">
        <div className={fadeIn}>
          {!this.state.imageLoaded && 
            <LoadingPage/>}

          <TopBar changeRoute={this.changeRoute} />
          <CountryCards changeCountrySelection={this.changeCountrySelection} />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import TopBar from '../TopBar/TopBar';
import CountryCards from '../CountryCards/CountryCards';
import LoadingPage from '../../Components/LoadingPage/LoadingPage';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      route:'Home',
      imageLoaded: false,
    }

    this.changeImageLoaded = this.changeImageLoaded.bind(this); 
  }

  changeRoute = (newRoute) => {
    this.setState({
      route: newRoute
    })
  }

  changeImageLoaded(){
    this.setState({ imageLoaded: true })
    console.log('Image loaded');
  }

  render() {
    return (
      <div className="App">
        
        {!this.state.imageLoaded && 
          <LoadingPage imageLoaded={this.state.imageLoaded}/>}

        <TopBar changeRoute={this.changeRoute} changeImageLoaded={this.changeImageLoaded} />
        <CountryCards />
      </div>
    );
  }
}

export default App;

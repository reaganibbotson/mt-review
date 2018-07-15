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
  }

  render() {
    return (
      <div className="App">
        
        {!this.state.imageLoaded && 
          <LoadingPage/>}

        <TopBar changeRoute={this.changeRoute} />
        <CountryCards />
      </div>
    );
  }
}

export default App;

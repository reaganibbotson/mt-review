import React, { Component } from 'react';
//import { BrowserRouter as Router, Route} from 'react-router';
import TopBar from '../TopBar/TopBar';
import CountryCards from '../CountryCards/CountryCards';
import ResortCards from '../ResortCards/ResortCards';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      route:'Home',
      imageLoaded: true,
      fadeIn: true,
      countrySelection:'',
      resortSelection:'',
    }

    this.changeSelection = this.changeSelection.bind(this);
  }

  changeRoute = (newRoute) => {
    if(newRoute === 'Home'){
      this.setState({
        route: newRoute,
        countrySelection: '',
        resortSelection:''
      })
    }else{
      this.setState({
        route: newRoute
      })
    }
  }

  changeSelection(e){
    this.state.countrySelection === '' ?
      this.setState({ countrySelection: e.target.id })
    :
      this.setState({resortSelection: e.target.id})
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
          <TopBar changeRoute={this.changeRoute} />
          {this.state.countrySelection === '' ?
            <CountryCards changeSelection={this.changeSelection} />
          :
            <ResortCards countrySelection={this.state.countrySelection} changeSelection={this.changeSelection}/>
          }
        </div>
        {this.state.countrySelection}
        {this.state.resortSelection}
      </div>
    );
  }
}

export default App;

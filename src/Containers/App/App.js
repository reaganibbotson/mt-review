import React, { Component } from 'react';
import TopBar from '../TopBar/TopBar';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      route:'Home',
    }
  }

  changeRoute = (newRoute) => {
    this.setState({
      route: newRoute
    })
  }

  render() {
    return (
      <div className="App">
        <TopBar changeRoute={this.changeRoute} />
        <div className='blah'>{this.state.route}</div>
      </div>
    );
  }
}

export default App;

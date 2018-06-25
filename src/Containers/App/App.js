import React, { Component } from 'react';
import OpenSlide from '../OpenSlide/OpenSlide';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OpenSlide/>
      </div>
    );
  }
}

export default App;

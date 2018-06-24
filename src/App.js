import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='halfBox'>
          <svg viewBox='0 0 100 100'>
            <polygon points="50,10 10,10 10,20" className="svg1" />
          </svg>
        </div>
      </div>
    );
  }
}

export default App;

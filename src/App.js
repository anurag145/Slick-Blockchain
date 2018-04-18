import React, { Component } from 'react';

import './App.css';
import Blockchain from './containers/Blockchain/Blockchain';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Blockchain/>
      </div>
    );
  }
}

export default App;

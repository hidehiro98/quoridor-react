import React, { Component } from 'react';
import './App.css';

import Game from './Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Quoridor by React
          </h1>
        </header>
        <div className="App-game">
          <Game />
        </div>
      </div>
    );
  }
}

export default App;

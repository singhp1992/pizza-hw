import React, { Component } from 'react';
import './App.css';
import ConfigurePizza from './containers/ConfigurePizza'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Let's Build A Pizza!</h1>
        </header>
        <ConfigurePizza />
      </div>
    );
  }
}

export default App;

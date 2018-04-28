import React, { Component } from 'react';
import './App.css';
import BaseForm from './components/BaseForm'
import SauceForm from './components/SauceForm'
import ToppingsForm from './components/ToppingsForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Let's Eat!</h1>
        </header>
          <BaseForm />
          <br />
          <br />
          <SauceForm />
          <br /> 
          <br />
          <ToppingsForm />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import './App.css';
import Login from './containers/Login/Login';


class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1> Mi App de React EAM </h1>
        <Login/>
        </header>
      </div>
    );
  }
}

export default App;

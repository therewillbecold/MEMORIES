import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './router';
import 'antd-mobile/dist/antd-mobile.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router/>
      </div>
    );
  }
}

export default App;

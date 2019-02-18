import React, { Component } from 'react';
import './App.css';
 import { Link } from 'react-router-dom';
import Main from './components/main';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}
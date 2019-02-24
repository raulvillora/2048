import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Game from './components/Game';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      landingPage_hidden: false,
      game_hidden: true,
    }
    this.handleLandingPageClick = this
    .handleLandingPageClick
    .bind(this);
  }

  handleLandingPageClick() {
    this.setState({landingPage_hidden: true, game_hidden: false});
  }

  render() {
    return (
      <div className="App">
          <div className="headingStyle" hidden={this.state.landingPage_hidden}>
            <LandingPage handleLandingPageClick={this.handleLandingPageClick}/>
          </div>
          <div hidden={this.state.game_hidden}>
            <Game/>
          </div>
      </div>
    );
  }
}
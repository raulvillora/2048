import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from "./LandingPage";
import Game from "./Game";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/2048" component={LandingPage} />
    <Route exact path="/game" component={Game} />
  </Switch>
)

export default Main;
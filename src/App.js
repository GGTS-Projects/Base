import React, {Component} from 'react';
import logo from './logo.svg';
import GamesPage from './GamesPage';
import GamesForm from './GameForm';
import './App.css';
import {Link, Match} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="ui container">

        <div className="ui three item menu">
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/">Home</Link>
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/games">Games</Link>
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/games/new">Add New Game</Link>
        </div>

        <Match exactly pattern="/games" component={GamesPage}/>
         <Match pattern="/games/new" component={GamesForm}/>
      </div>
    );
  }
}

export default App;

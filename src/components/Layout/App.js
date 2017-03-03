import React, {Component} from 'react';
//import GamesPage from './GamesPage';
//import GamesFormPage from './GameFormPage';
import './App.css';
import {Link, Match} from 'react-router';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <div className="container">
<Header/>

        {/*<div className="ui three item menu">
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/">Home</Link>
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/games">Games</Link>
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/games/new">Add New Game</Link>
        </div>*/}

       {/*<Match exactly pattern="/games" component={GamesPage}/>
         <Match pattern="/games/new" component={GamesFormPage}/>
         <Match pattern="/game/:_id" component={GamesFormPage}/>*/}
      </div>
    );
  }
}

export default App;

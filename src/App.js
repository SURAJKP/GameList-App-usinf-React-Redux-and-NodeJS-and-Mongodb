import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import GameForm from './components/GameForm';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="ui container">
       <div className="ui three item menu">
         <Link  className="item"  activeClassName="active" activeOnlyWhenExact to={'/'}>Home</Link>
         <Link  className="item" activeClassName="active" to={'/games'}>Games</Link>
         <Link  className="item" activeClassName="active" to={'/games/new'}>Add New Games</Link>
       </div>

      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/games' component={GamePage} />
          <Route exact path='/games/new' component={GameForm} />
      </Switch>
      </div>
      </Router>

    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PokemonList from './components/PokemonList/PokemonList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/pokemon-list' component={PokemonList} />
          <Route render={() => <p>Not found</p>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

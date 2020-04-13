import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PokemonPage from './components/PokemonPage/PokemonPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonContextProvider from './contexts/PokemonContext';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import Favourites from './components/Favourites/Favourites';

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <PokemonContextProvider>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/pokemon-page' component={PokemonPage} />
              <Route path='/pokemon-page/:pokemonName' component={PokemonDetails} />
              <Route path='/favourites' component={Favourites} />
              <Route render={() => <p>Not found</p>} />
            </Switch>
          </PokemonContextProvider>
      </div>
    </Router>
  );
}

export default App;

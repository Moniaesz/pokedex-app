import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PokemonPage from './components/PokemonPage/PokemonPage';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import Favourites from './components/Favourites/Favourites';
import Page404 from './components/Page404/Page404';
import PokemonContextProvider from './contexts/PokemonContext';
import ErrorsContextProvider from './contexts/ErrorsContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './helpers/routes';

function App() {
  return (
    <Router>
      <ErrorsContextProvider>
        <div className="App">
            <Header />
            <PokemonContextProvider>
                <Switch>
                  <Route
                    exact path={routes.root}
                    component={Home}
                  />
                  <Route
                    exact path={routes.pokemon}
                    component={PokemonPage}
                  />
                  <Route
                    path={routes.details}
                    component={PokemonDetails}
                  />
                  <Route
                    path={routes.favourites}
                    component={Favourites}
                  />
                  <Route component={Page404} />
                </Switch>
            </PokemonContextProvider>
        </div>
      </ErrorsContextProvider>
    </Router>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';
import RandomPlanet from './component/RandomPlanet/RandomPlanet';
import PersonPage from './component/PersonPage/PersonPage';
import PlanetPage from './component/PlanetPage/PlanetPage';
import StarshipPage from './component/StarshipPage/StarshipPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import { StarshipDetails } from './component/sw-pages/ItemsDetails';
import Layout from './component/Layout/Layout';

class App extends Component {

  render() {
    return (
      <div className="app-container">

        <Layout />
        <RandomPlanet />

          <Switch>
            <Route path="/" exact render={() => <h2 className="Salutation
">Welcome to Star DB</h2>} />
            <Route path="/people/:id?" component={PersonPage} />
            <Route path="/planet" component={PlanetPage} />

            <Route path="/starship" exact component={StarshipPage} />
            <Route path="/starship/:id" render={({ match }) => {
              const { id } = match.params;
              return <StarshipDetails itemId={id} />;
            }}
            />
              <Redirect to="/" />
          </Switch>

      </div>
    );
  }
}

export default App;

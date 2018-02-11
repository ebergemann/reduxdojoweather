import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from 'react-router-dom';
import CityForecast from './CityForecast'
import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <header>
        <h1>Dojo Weather Forecast</h1>
        <ul className="navList">
          {this.props.cities.map((city) =>(
            <li key={city.id}><NavLink to={`/${city.city}`}>{city.city}, {city.state}</NavLink> </li>
          ))}
        </ul>
      </header>
      <main>
        <Route path="/:city" component={CityForecast}/>
      </main>
      </div>
      </Router>
    );
  }
}

const mapStateToProps = ({cities}) => {
  return {
    cities
  }
}

export default connect(mapStateToProps)(App);

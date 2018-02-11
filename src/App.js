import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Link
} from 'react-router-dom';
import CityForecast from './CityForecast';
import AddCity from './AddCity';
import './App.css';



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <header>
        <h1>Dojo Weather Forecast</h1>
        <ul className="navList">
          {this.props.cities.map((city, idx) =>(
            <li key={idx}><NavLink to={`/${city.city}`}>{city.city}, {city.state}</NavLink> </li>
          ))}
          <li ><NavLink to="/new">Add New City</NavLink> </li>
        </ul>
      </header>
      <main>
        <Switch>
        <Route exact path="/new" component={AddCity}/>
        <Route path="/:city" component={CityForecast}/>
        </Switch>
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

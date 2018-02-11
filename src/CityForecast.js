import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchCityDataAction} from './state/actions';
import './App.css';

class CityForecast extends Component {
    componentDidMount() {
        this.props.getCityForecast(this.props.match.params.city)
    }

    render() {
        return(
            <div className="forecastCont">
                <div className="forecastCityTitle">
                    <h1>{this.props.currentCity.name}</h1>
                </div>
                <div className="flexcard"><div className="forecastDetail">
                <ul className="details">
                    <li><h3>Humidity: </h3><span>{this.props.currentCity.humidity}</span></li>
                    <li><h3>Temprature (Average): </h3><span>{this.props.currentCity.avgTemp}</span></li>
                    <li><h3>Temprature (High): </h3><span>{this.props.currentCity.highTemp}</span></li>
                    <li><h3>Temprature (Low): </h3><span>{this.props.currentCity.lowTemp}</span></li>
                    <li><h3>Status: </h3><span>Scattered Clouds</span></li>
                </ul>
                <input type="checkbox" /><span>Farenheit</span>
                </div>
                <div className="imageContainer">
                    <img src="https://picsum.photos/250/250/?random" alt="Not found"/>
                </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = ({currentCity}) => {
    return {
        currentCity
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getCityForecast: (city) => dispatch(fetchCityDataAction(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityForecast);
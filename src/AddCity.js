import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchCityToAdd} from './state/actions'
import './App.css';

class AddCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityInput: ''
        }
    }
    
    render() {
        return (
            <div className="forecastCont">
                <div className="forecastCityTitle">
                    <h1>Add a City</h1>
                </div>
                <div className="addCityForm">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        this.props.addCityToNavBar(this.state.cityInput);
                    }}>
                        <input type="text"
                        onChange={(e) => {this.setState({cityInput: e.target.value})}}
                        value={this.state.cityInput}
                        placeholder="Enter a city name"  />
                        <button>Add a City</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCityToNavBar: newCity => dispatch(fetchCityToAdd(newCity))
    }
}

const mapStateToProps = state => {
    return {
        errCityNotFound: state.cityNotFound
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddCity);
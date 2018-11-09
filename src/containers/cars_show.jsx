import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom'; 
import { fetchCar } from '../actions';

class CarsShow extends Component {

  componentWillMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }

    return(
      <div className="app">
        <div className="description-container">
          <div className="description-image">
          </div>
          <h3 className="text-center"> {this.props.garage} </h3>
          <div className="text-center">
            <Link className="btn btn-primary btn-cta" to="/">
              Back To list
            </Link> 
          </div>
        </div>
        <div className="car-container">
          <div className="col-xs-6 col-xs-offset-3 card">
            <h4> {this.props.car.brand} - {this.props.car.model} </h4>
            <p> <strong> Owner :</strong> {this.props.car.owner}</p>
            <h4 className="text-center">{this.props.car.plate}</h4>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(p => p.id === idFromUrl);
  console.log(car);
  return { 
    car: car,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);

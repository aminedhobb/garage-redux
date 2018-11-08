import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCars } from '../actions';
import { Link } from 'react-router-dom'; 

class CarsIndex extends Component {

  componentWillMount() {
    this.props.fetchCars();
  }

  renderCars() {
    return (
      this.props.cars.map((car) => {
        return(
          <div className="card" key={car.id}>
            <h4> {car.brand} - {car.model} </h4>
            <p> <strong> Owner :</strong> {car.owner}</p>
          </div>
        )
      })
    )
  }

  render() {
    return (
      <div className="app">
        <div className="description-container">
          <div className="description-image">
          </div>
          <h3 className="text-center"> {this.props.garage} </h3>
          <div className="text-center">
            <Link className="btn btn-primary btn-cta" to="/cars/new">
                Add a car
            </Link> 
          </div>
        </div>
        <div className="cars-container">
          {this.renderCars()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);

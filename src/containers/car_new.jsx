import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field } from 'redux-form';
import { createCar } from '../actions';
import { Link } from 'react-router-dom'; 

class carNew extends Component {

  onSubmit = (values) => {
    this.props.createCar(values, (post) => {
      this.props.history.push('/'); // Navigate after submit
      return post;
    });
  }

  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
      </div>
    );
  }

  render() {
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
        <div className="form-container">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              className="form-control"
              label="Brand"
              name="brand"
              placeholder="Peugeot"
              component={this.renderField}
            />            
            <Field
              className="form-control"
              label="Model"
              name="model"
              placeholder="106"
              component={this.renderField}
            />            
            <Field
              className="form-control"
              label="Owner"
              name="owner"
              placeholder="Amine"
              component={this.renderField}
            />            
            <Field
              className="form-control"
              label="Plate"
              name="plate"
              placeholder="AZ352A3"
              component={this.renderField}
            />
            <button className="btn btn-primary" type="submit" >
              Add car
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({ form: 'newCarForm' })(
  connect(null, { createCar })(carNew)
);

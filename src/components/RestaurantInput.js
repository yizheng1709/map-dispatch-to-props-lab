import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // add missing code
    console.log(this)
    const restaurant = {name: this.state.name, location: this.state.location}
    // debugger
    this.props.restaurants(restaurant)
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};


//connect this component by wrapping RestaurantInput below


//the values of the properties in the return value of the function ARE functions
// that invoke the dispatch function - we pass in ACTION OBJECTS to dispatch as the argument
// even if we dont pass mapDispatchToProps, this component will automatically still get access to dispatch

const mapDispatchToProps = dispatch => {
  console.log("in mapDispatchToProps and >>", dispatch)
  return {
    restaurants: (restaurant) => {
      // debugger
      dispatch(addRestaurant(restaurant))
    }
  }
}

export default connect(null, mapDispatchToProps)(RestaurantInput)

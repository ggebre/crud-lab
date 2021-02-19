import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRestaurant } from '../actions/restaurantAction'

class RestaurantInput extends Component {
  state = {
    text: ""
  }
  handleChange = (e) => {
    this.setState({text: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addRestaurant(this.state)
    this.setState({text: ""}) 
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p><label>Restaurant Name:</label> 
          <input type="text" onChange={this.handleChange} value={this.state.text}/></p>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
};
const mDTP = dispatch => {
  return {
    addRestaurant: (restaurant) => dispatch(addRestaurant(restaurant))
  }
}

export default connect(null, mDTP)(RestaurantInput);

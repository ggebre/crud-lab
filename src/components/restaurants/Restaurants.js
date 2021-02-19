import React, { Component } from 'react';
import Restaurant from './Restaurant'
import { connect } from 'react-redux'
class Restaurants extends Component {
  
  render() {
    return(
      <ul>
        {this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} />)}
      </ul>
    );
  }
};
const mSTP = state => {
  return {
    restaurants: state.restaurants
  }
}

export default connect(mSTP)(Restaurants);
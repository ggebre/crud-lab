import React, { Component } from 'react';
import Review from './Review';
import { connect } from 'react-redux'
class Reviews extends Component {
  reviewsForARestaurant = () => {
    return this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
  }

  render() {
    
    return (
      <ul>
        {this.reviewsForARestaurant().map(review => <Review key={review.id} review={review}/>)}
      </ul>
    );
  }
};
const mSTP = state => {
  return {
    reviews: state.reviews
  }
}

export default connect(mSTP)(Reviews) ;
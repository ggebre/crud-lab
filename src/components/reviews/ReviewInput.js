import React, { Component } from 'react';
import Reviews from './Reviews';
import { connect } from 'react-redux'
import { addReview } from '../actions/restaurantAction'

class ReviewInput extends Component {
  state = {
    text: ""
  }
  handleChange = (e) => {
    this.setState({text: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const payload = {restaurantId: this.props.restaurant.id, text: this.state.text}
    this.props.addReview(payload)
    this.setState({text: ""}) 
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
};
const mDTP = dispatch => {
  return {
    addReview: (payload) => dispatch(addReview(payload))
  }
}
export default connect(null, mDTP)(ReviewInput);

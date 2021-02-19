import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';
import { connect } from 'react-redux' 
import {deleteRestaurant, editRestaurant} from '../actions/restaurantAction' 

class Restaurant extends Component {
  state = {
    edit: false,
    text: ""
  }
  handleChange = (e) => {
    this.setState({text: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault() 
    const restaurant = this.props.restaurant 
    restaurant.text = this.state.text 
    this.props.editRestaurant(restaurant) 
    this.setState({edit: false, text: ""})
  }
  handleEdit = () => {
    // make a form visible 
    this.setState({edit: true})
  } 

  render() {
    const { restaurant } = this.props;

    return (
      <div> 
        { this.state.edit 
              ?
              <React.Fragment>
                <form onSubmit= {this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" placeholder={restaurant.text} value={this.state.text}/>
                    <input type="submit" value="Submit"/>
                </form> 
              </React.Fragment>
              :
              <React.Fragment>
                  <li>
                    {restaurant.text}
                    <button onClick={this.handleEdit}> edit </button>
                    <button onClick={() => this.props.deleteRestaurant(restaurant.id)}> X </button>
                    
                  </li>
              </React.Fragment> 
        }
        <ReviewsContainer restaurant={restaurant}/>
      </div>
    );
  }
};

const mDTP = dispatch => {
  return {
    deleteRestaurant: (id) => dispatch(deleteRestaurant(id)),
    editRestaurant: restaurant => dispatch(editRestaurant(restaurant))
  }
}

export default connect(null, mDTP)(Restaurant);

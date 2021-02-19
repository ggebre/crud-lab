import React, { Component } from 'react';
import { connect } from 'react-redux' 
import { deleteReview, editReview} from '../actions/restaurantAction'
class Review extends Component {
  state = {
    edit: false,
    text: ""
  }
  handleChange = (e) => {
    this.setState({text: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault() 
    const review = this.props.review 
    review.text = this.state.text 
    this.props.editReview(review) 
    this.setState({edit: false, text: ""})
  }
  handleEdit = () => {
    // make a form visible 
    this.setState({edit: true})
  }
  
  render() {
    const { review } = this.props;

    return (
      <div>
        
        { 
        this.state.edit 
              ? 
        <form onSubmit= {this.handleSubmit}>
          <input onChange={this.handleChange} type="text" placeholder={review.text} value={this.state.text}/>
          <input type="submit" value="Submit"/>
        </form> 
                :
                <React.Fragment>
                    <li>
                      {review.text}
                    
                    <button onClick={this.handleEdit}> edit </button>
                    <button onClick={() => this.props.deleteReview(review.id)}> X </button>
                    </li>
                </React.Fragment>
        
          }
         
        
      </div>
    );
  }

};

const mDTP = dispatch => {
  return {
    deleteReview: id => dispatch(deleteReview(id)),
    editReview: id => dispatch(editReview(id))
  }
}

export default connect(null, mDTP)(Review);

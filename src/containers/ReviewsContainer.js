import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'; 

class ReviewsContainer extends Component {
  render() {
    const { restaurant } = this.props;
    return (
      <div>
        <ReviewInput restaurantId={restaurant.id} addReview={this.props.addReview} />
        <Reviews reviews={this.props.reviews} deleteReview={this.props.deleteReview} restaurantId={restaurant.id} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (review) => dispatch({ type: 'ADD_REVIEW', review }),
    deleteReview: (id) => dispatch({ type: 'DELETE_REVIEW', id }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)

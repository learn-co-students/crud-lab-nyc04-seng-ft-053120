import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, deleteReview, restaurantId } = this.props;
    const filteredReviews = reviews.filter(review => review.restaurantId === restaurantId);
    console.log(filteredReviews)

    return (
      <div>
        <ul>
          {
            filteredReviews.map(review => <Review key={review.id} review={review} deleteReview={deleteReview} /> )
          }
        </ul>
      </div>
    );
  }
};

export default Reviews;
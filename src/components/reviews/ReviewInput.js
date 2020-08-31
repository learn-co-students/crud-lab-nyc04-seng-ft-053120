import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: '',
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      restaurantId: this.props.restaurantId,
      text: this.state.text,
    };
    this.props.addReview(review);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="review">Review</label>
          <input type="text" name="review" value={this.state.text} onChange={this.handleChange}></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;

import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ text: '' });
    this.props.addRestaurant(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Restaurant Name</label>
          <input type="text" name="name" value={this.state.text} onChange={this.handleChange}></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

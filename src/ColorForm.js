import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ColorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(this.state);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { ...colorData } = this.state;
    this.props.addColor(colorData);
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="ColorForm">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            onChange={this.handleChange}
            name="name"
            type="text"
            value={this.state.name}
          />
          <label htmlFor="value">Value: </label>

          <input
            onChange={this.handleChange}
            name="value"
            type="color"
            value={this.state.value}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default ColorForm;

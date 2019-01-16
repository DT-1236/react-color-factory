import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledColor = styled.div`
  background-color: ${props => props.color};
  width: 100em;
  height: 100em;
`;

// return <Color {...routerProps} value={color.value} />;

class Color extends Component {
  render() {
    return (
      <StyledColor className="Color" color={this.props.value}>
        <p>THIS IS {this.props.name.toUpperCase()}</p>
        <p>ISN'T IT BEAUTIFUL!?</p>
        <Link to="/">GO BACK</Link>
      </StyledColor>
    );
  }
}

export default Color;

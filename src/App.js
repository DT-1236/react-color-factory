import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import ColorForm from './ColorForm';
import Color from './Color';

class App extends Component {
  constructor(props) {
    super(props);
    this.renderColorLinks = this.renderColorLinks.bind(this);
    this.renderColor = this.renderColor.bind(this);
    this.renderHomePage = this.renderHomePage.bind(this);
    this.renderColorForm = this.renderColorForm.bind(this);
    this.addColor = this.addColor.bind(this);
    this.state = {
      colors: [{ name: 'red', value: 'red' }, { name: 'blue', value: 'blue' }]
    };
  }

  renderColorLinks() {
    return this.state.colors.map(color => (
      <Link to={`/colors/${color.name}`}>{color.name}</Link>
    ));
  }

  renderHomePage() {
    return (
      <div>
        <Link to="/colors/new">Add a Color</Link>
        <ul>{this.renderColorLinks()}</ul>
      </div>
    );
  }

  renderColor(routerProps) {
    const color = this.state.colors.filter(
      color => color.name === routerProps.match.params.color
    );
    if (color.length === 0) {
      return <Redirect to="/" />;
    }
    return (
      <Color {...routerProps} name={color[0].name} value={color[0].value} />
    );
  }

  renderColorForm(routerProps) {
    return <ColorForm {...routerProps} addColor={this.addColor} />;
  }

  addColor(newColor) {
    const { colors } = this.state;
    colors.push(newColor);
    this.setState({ colors });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/colors/new" render={this.renderColorForm} />
          <Route exact path="/colors/:color" render={this.renderColor} />
          <Route path="/" render={this.renderHomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;

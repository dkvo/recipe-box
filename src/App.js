import React, { Component } from 'react';
import Recipes from './components/recipes';
import Modal from './components/modal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      data: [{
        recipe: '',
        ingredients: []
      }]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
      console.log(` state: ${this.state.isOpen}`);
  }
  
  render() {
    return (
      <div className="app">
        <h1>Recipe Box</h1>
        <Recipes />
        <input type="button" ID="btn-add" value="Add recipe" onClick={this.handleClick}/>
        {this.state.isOpen ? <Modal closeModal={this.handleClick} /> : null}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Recipes from './components/recipes';
import Modal from './components/modal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Recipe Box</h1>
        <Recipes />
        <input type="button" ID="btn-add" value="Add recipe"/>
        <Modal />
      </div>
    );
  }
}

export default App;

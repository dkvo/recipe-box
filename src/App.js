import React, { Component } from 'react';
import Recipes from './components/recipes';
import Modal from './components/modal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      data: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.setData = this.setData.bind(this);
    this.removeData = this.removeData.bind(this);
  }

  componentDidMount() {
    if(localStorage.hasOwnProperty("data")) {
      let data = {...this.state.data};
      data = JSON.parse(localStorage.getItem("data"));
      this.setState({data});
    }
    window.addEventListener('beforeunload', this.cleanUp.bind(this));
  }
  cleanUp() {
    localStorage.setItem("data", JSON.stringify(this.state.data));
  }
  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.cleanUp.bind(this));
    this.cleanUp();
  }

  handleClick() {
    this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
  }
  setData(recipe) {
    let found = this.state.data.some((el) => {
      return el.name === recipe.name;
    });
    if(!found) {
      this.setState(prevState => ({data: prevState.data.concat(recipe)}));
    }
  }
  removeData(name) {
    this.setState(prevState => ({
      data: prevState.data.filter((el) => {
        return el.name !== name;
      })
    }));
  }

  
  
  render() {
    return (
      <div className="app">
        <h1>Recipe Box</h1>
        <Recipes recipes={this.state.data} remove={this.removeData}/>
        <input type="button" ID="btn-add" value="Add recipe" onClick={this.handleClick}/>
        {this.state.isOpen ? <Modal closeModal={this.handleClick} addRecipe={this.setData}/> : null}
      </div>
    );
  }
}

export default App;

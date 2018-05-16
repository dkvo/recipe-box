import React, { Component } from 'react';
import Recipes from './components/recipes';
import Modal from './components/modal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      data: [
        {
          name: 'Smashed Cucumber Salad With Spicy Feta and Olives',
          ingredients: ["1½ pound Persian cucumbers, halved lengthwise (about 10 Persian cucumbers)", "1¼ teaspoon kosher salt, divided", 
          "6 ounces feta cheese, crumbled (about 1⅓ cups)", "½ teaspoon crushed red pepper", "¼ teaspoon freshly ground black pepper, plus more to taste",
          "¾ cup olive oil", "2 tablespoons white wine vinegar", "½ cup mixed olives, pitted and coarsely chopped"]
        },
        {
          name: 'Filet Mignon with Marsala Sauce',
          ingredients: ['4 (170g) filet mignon beef steaks', 'salt and pepper to taste','50g butter', '150g sliced mushrooms', 
          '175ml Marsala wine', '4 tablespoons balsamic vinegar','25g thinly sliced spring onions']
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.setData = this.setData.bind(this);
    this.removeData = this.removeData.bind(this);
    this.updateData = this.updateData.bind(this);
  }
  componentDidMount() {
    if(localStorage.hasOwnProperty("data")) {
      let data = [...this.state.data];
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

  updateData(newObj, oldName) {
      let arr = [...this.state.data];
      let data = arr.map((el) => {
        if(el.name === oldName) {
          el.name = newObj.name;
          el.ingredients = newObj.ingredients;
        }
        return el;
      });
      this.setState({data});
  }

  
  
  render() {
    return (
      <div className="app">
        <h1>Recipe Box</h1>
        <Recipes recipes={this.state.data} remove={this.removeData} updateRecipe={this.updateData}/>
        <input type="button" ID="btn-add" value="Add Recipe" onClick={this.handleClick}/>
        {this.state.isOpen ? <Modal closeModal={this.handleClick} addRecipe={this.setData}/> : null}
      </div>
    );
  }
}

export default App;

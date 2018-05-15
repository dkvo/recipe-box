import React from 'react';
import './../styles/recipes.css';
import CollapsibleItem from './collapsibleItem';
class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.removeData = this.removeData.bind(this);
        this.collapse = this.collapse.bind(this);
        this.state = {
            recipeName:''
        }
    }
    removeData(name) {
        this.props.remove(name);
    }
    collapse(name) {
       this.setState(prevState => ({
           recipeName: name
       }));
    }

    render() {
        const collapsible = this.props.recipes.map((recipe) => {
            var toggle = false;
            if(this.state.recipeName === recipe.name)
                toggle = true;
           return <CollapsibleItem recipe={recipe.name} ingredients={recipe.ingredients} remove={this.removeData} collapse={this.collapse} toggle={toggle}/>;
        })
        return (
            <div className="recipe-container">
                {collapsible}
            </div>
        )
    }
}

export default Recipes;
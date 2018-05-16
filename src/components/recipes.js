import React from 'react';
import './../styles/recipes.css';
import CollapsibleItem from './collapsibleItem';
class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.removeData = this.removeData.bind(this);
        this.collapse = this.collapse.bind(this);
        this.update = this.update.bind(this);
        this.state = {
            recipeName:'',
            toggle: false
        }
    }
    removeData(name) {
        this.props.remove(name);
    }
    collapse(name, isToggle) {
       this.setState(prevState => ({
           recipeName: name,
           toggle: isToggle
       }));
    }

    update(newObj, oldName) {
        this.props.updateRecipe(newObj, oldName);
    }

    render() {
        const collapsible = this.props.recipes.map((recipe) => {
            var toggle = false;
            if(this.state.recipeName === recipe.name && this.state.toggle !== true)
                toggle = true;
           return <CollapsibleItem recipe={recipe.name} ingredients={recipe.ingredients} remove={this.removeData} collapse={this.collapse} toggle={toggle} updateRecipe={this.update}/>;
        })
        return (
            <div className="recipe-container">
                <div className="collapsible-container">
                    {collapsible}
                </div>
            </div>
        )
    }
}

export default Recipes;
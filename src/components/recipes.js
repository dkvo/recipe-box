import React from 'react';
import './../styles/recipes.css';
import CollapsibleItem from './collapsibleItem';
class Recipes extends React.Component {
    render() {
        return (
            <div className="recipe-container">
                <CollapsibleItem />
            </div>
        )
    }
}

export default Recipes;
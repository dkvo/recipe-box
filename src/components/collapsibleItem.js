import React from 'react';
import './../styles/collapsible.css';
import EditModal from './EditModal'

class CollapsibleItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
        this.toggleIngerdients = this.toggleIngerdients.bind(this);
        this.removeData = this.removeData.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    toggleIngerdients() {
        this.props.collapse(this.props.recipe);
    }

    removeData() {
        this.props.remove(this.props.recipe);
    }

    handleClick() {
        this.setState(prevState => ({
            isEdit: !prevState.isEdit
          }));
    }

    render() {
        const list = this.props.ingredients.map((ingredient) => {
            return <li>{ingredient}</li>
        });
        let ingredients = this.props.toggle ? (<div className="ingredients">
        <hr/>
        <h4>Ingredients</h4>
        <ul>
            {list}
        </ul>
        <input type="button" value="Delete" ID="delete-btn" onClick={this.removeData}/>
        <input type="button" value="Edit" ID="show-edit-btn" onClick={this.handleClick}/>
        </div>) : null;
        return (
            <div className="recipe">
               <div className="recipe-name">
                    <h5 onClick={this.toggleIngerdients}>{this.props.recipe}</h5>
               </div>
               {ingredients}
               {this.state.isEdit ? <EditModal closeModal={this.handleClick} recipe={this.props.recipe} ingredients={this.props.ingredients}/> : null}
            </div>
        );
    }
}

export default CollapsibleItem;



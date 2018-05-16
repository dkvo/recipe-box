import React from 'react';

class EditModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.update = this.update.bind(this);
    }
    handleClick() {
        this.props.closeModal();
    }

    update(event) {
        event.preventDefault();
        let recipe = {
            name: '',
            ingredients: []
        };
        recipe.name = event.target.recipeName.value;
        recipe.ingredients = event.target.ingredients.value.split(",");
        this.props.updateRecipe(recipe, this.props.recipe);
        this.props.closeModal();
    }
    render() {
        let ingredients = this.props.ingredients.join(',');
        return (
            <div className="modal">
                <div className="modal-content">
                    <span><div className="close" onClick={this.handleClick}>&times;</div></span>
                    <h1 ID="modal-header">Recipe and Ingredients</h1>
                    <hr/>
                    <form onSubmit={this.update}>
                        <div className="form-group">
                            <label><strong>Recipe Name</strong></label>
                            <input type="text" defaultValue={this.props.recipe} name="recipeName" required/>
                        </div>   
                        <div className="form-group">
                            <label><strong>Ingredients</strong></label>
                            <textarea type="text" defaultValue={ingredients} name="ingredients" data-gramm_editor="false" required/>
                        </div>
                        <hr ID="second-hr"/>
                        <div className="btn-group">
                            <input type="button" value="Close" ID="btn-close" onClick={this.handleClick}/>
                            <input type="submit" value="Edit" ID="btn-submit"/>
                        </div>
                        <span class="clear"></span>
                    </form>    
                </div>
            </div>
        )
    }
}

export default EditModal;
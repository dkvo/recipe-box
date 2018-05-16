import React from 'react';
import './../styles/modal.css'
class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            recipe: {
                name: '',
                ingredients: []   
            }
        };
        this.handleClick = this.handleClick.bind(this);
        this.setRecipe = this.setRecipe.bind(this);
    }

    handleClick() {
        this.props.closeModal();
    }
    setRecipe(event) {
        var recipe = {...this.state.recipe};
        recipe.name = event.target.recipeName.value;
        recipe.ingredients = event.target.ingredients.value.split(",");
        event.preventDefault();
        this.setState({recipe}, function() {
            this.props.addRecipe(this.state.recipe);
            this.props.closeModal();
        });
    }



    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <span><div className="close" onClick={this.handleClick}>&times;</div></span>
                    <h1 ID="modal-header">Recipe and Ingredients</h1>
                    <hr/>
                    <form onSubmit={this.setRecipe}>
                        <div className="form-group">
                            <label><strong>Recipe Name</strong></label>
                            <input type="text" placeHolder="Enter recipe name" name="recipeName" required/>
                        </div>   
                        <div className="form-group">
                            <label><strong>Ingredients</strong></label>
                            <textarea type="text" placeHolder="Enter ingredients, separated, by commas" name="ingredients" data-gramm_editor="false" required/>
                        </div>
                        <hr ID="second-hr"/>
                        <div className="btn-group">
                            <input type="button" value="Close" ID="btn-close" onClick={this.handleClick}/>
                            <input type="submit" value="Add" ID="btn-submit"/>
                        </div>
                        <span class="clear"></span>
                    </form>    
                </div>
            </div>
        );
    }
}

export default Modal;
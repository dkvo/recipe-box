import React from 'react';
import './../styles/modal.css'
class Modal extends React.Component {
    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <span><div className="close">&times;</div></span>
                    <h1 ID="modal-header">Recipe and Ingredients</h1>
                    <hr/>
                    <form action="">
                        <div className="form-group">
                            <label><strong>Recipe Name</strong></label>
                            <input type="text" placeHolder="Enter recipe name"/>
                        </div>   
                        <div className="form-group">
                            <label><strong>Ingredients</strong></label>
                            <textarea type="text" placeHolder="Enter ingredients, separated, by commas" data-gramm_editor="false"/>
                        </div>
                        <hr ID="second-hr"/>
                        <div className="btn-group">
                            <input type="button" value="close" ID="btn-close"/>
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
import React, {Component} from 'react';

class CreateIngredient extends Component {
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="todoListMain">
				<div className="header">
					<form onSubmit={this.props.addItem}>
						<input placeholder="Ingredient" ref={this.props.inputElement} value={this.props.currentItem} onChange={this.props.handleInput}/>
						<input placeholder="Amount" ref={this.props.inputElement} value={this.props.currentItem} onChange={this.props.handleAmount}/>
						<button type="submit">Add Ingredient</button>
					</form>
				</div>
			</div>
		)
	}
}

export default CreateIngredient;
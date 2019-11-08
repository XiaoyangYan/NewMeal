import React from 'react';
class IngredientList extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			listItems: []
		}
		this.createTasks = this.createTasks.bind(this)
	}
	createTasks(item) {
		return (
			<>
			<li key={item.key}>{item.text} {item.amount}</li>
			<button class= "xd" type="button" onClick = {() => this.props.deleteItem(item.key)}>X</button>
			</>
		)
	}
	render() {
		const todoEntries = this.props.entries
		const listItems = todoEntries.map(this.createTasks)
		return (
			<>
			<ul className="theList">{listItems}</ul>
			</>
		)
	}
}
export default IngredientList;
import React from 'react';
import CreateIngredient from './CreateIngredient';
import IngredientList from './IngredientList';
class CreateForm extends React.Component{

        constructor (props){
            super(props)
            this.state = {
                items: [],
                currentItem: {text:'', amount:'' , key:''},
            }
        }
        addItem = e => {
            e.preventDefault()
            const newItem = this.state.currentItem
            if (newItem.text !== '') {
                console.log(newItem)
                const items = [...this.state.items, newItem]
                this.setState({
                    items: items,
                    currentItem: {text:'',amount:'', key:''},
                })
            }
        }
        
        handleInput = e => {
            const itemText = e.target.value
            const currentItem = {text: itemText, amount:this.state.currentItem.amount ,key: Date.now()}
            this.setState({
                currentItem,
            })
            console.log('handled')
        }
        handleAmount = e=> {
            const itemAmount = e.target.value
            const currentItem = {text:this.state.currentItem.text,amount: itemAmount,key: Date.now()}
            this.setState({
                currentItem,
            })
            console.log('handledAmount')
        }

        deleteItem = key=> {
            console.log(this.state.items)
            const filteredItems = this.state.items.filter(item => {
                return item.key !== key
            })
            this.setState({
                items: filteredItems,
            })
            console.log(this.state.items)
        }
        render(){
            return (
                    <form>
                    <div className="createform-box">
                        <div className="createform-input">
                            <label htmlFor="createform-recipename">Recipe Name: </label>
                            <input id="createform-recipename" name="recipename"  type="text" className="input" 
                            placeholder="Recipe Name"  value={this.props.recipename}
                                onChange = {this.props.onChange}/>
                        </div>
                        <div>Select all that Apply</div>
                        <div className="createform-checkboxlist">
                            
                            <input id="createform-Vegan" type="checkbox" className="createform-check" />
                            <label htmlFor="createform-Vegan"><span className="icon"></span>Vegan</label>
                            <input id="createform-Vegetarian" type="checkbox" className="createform-check" />
                            <label htmlFor="createform-Vegetarian"><span className="icon"></span>Vegetarian</label>
                            <input id="createform-lowcarb" type="checkbox" className="createform-check" />
                            <label htmlFor="createform-lowcar"><span className="icon"></span>Low-Carb</label>
                            <input id="createform-mediterranean" type="checkbox" className="createform-check" />
                            <label htmlFor="createform-mediterranean"><span className="icon"></span>Mediterranean</label>	
                            <input id="createform-paleo" type="checkbox" className="createform-check" />
                            <label htmlFor="createform-paleo"><span className="icon"></span>Paleo</label>	
                            <input id="createform-glutenfree" type="checkbox" className="createform-check" />
                            <label htmlFor="createform-glutenfree"><span className="icon"></span>Gluten-Free</label>	
                            <CreateIngredient addItem={this.addItem} inputElement={this} handleInput={this.handleInput} currentItem={this.currentItem} handleAmount={this.handleAmount}></CreateIngredient>
                            <IngredientList entries={this.state.items} deleteItem={this.deleteItem}></IngredientList>				
                        </div>
                        <div className="group">
                            <input type="button" className="button" value="Submit Recipe" onClick={this.props.submitRecipe}/>
                        </div>
                    </div>
                    </form>
            );
        }
}
export default CreateForm;
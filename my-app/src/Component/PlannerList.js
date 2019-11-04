import React from 'react';
import Card from "./Card";
class PlannerList extends React.Component{
        constructor(props){
                super(props);
                this.state = {

                }
        }
        render(){
                if (this.props.food.length === 0){
                        return <p>Your search has 0 results.</p>
                }
                return(
                        <ul className="recipe-planning-list">
                                {this.props.food.map((item, index) => (
                                        <li onClick={() => this.props.onSelect(item) } key={index}>
                                                <Card backgroundImage={item.image}  calories={item.calories}
                                                title={item.label} source={item.source} ingredientsLength={item.ingredients.length}/>
                                        </li>
                                ))}
                        </ul>
                );
        }


}

export default PlannerList;
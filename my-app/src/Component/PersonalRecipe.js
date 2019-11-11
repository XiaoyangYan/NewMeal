import React from "react";
import Tags from "./Tags";

class PersonalRecipe extends React.Component{
        constructor(props){
                super(props);
                this.state = {

                }
        }
        render(){
                const {index, items} = this.props
                return (
                        <li key={index}>
                                <div className="button-self-recipe-group">
                                <button  className="edit-my-new-recipe">Edit</button>
                                <button  className="delete-my-new-recipe">Delete</button>
                                </div>
                                <div className="self-recipe-except-picture">
                                        <div className="self-recipe-show-item">
                                                <div className="self-recipe-name"><span>Creator:  </span>{items.userName}</div>
                                                <div className="self-recipe-headline"><span>Recipe Name:  </span>{items.title}</div>
                                        </div>
                                        <div className="styled-Categories">
                                        <h6> Cautions: </h6>
                                        <ul className="styled-CategoryList Cautions">
                                        {
                                                items.cautions.map((smallItems, smallIndex) =>
                                                <li key={smallIndex}>
                                                                <Tags key={smallIndex} checked={true} onChange={this.noneEffect}>{smallItems}</Tags>
                                                </li>
                                                )
                                        }
                                        </ul>
                                </div>
                                        <div className="self-recipe-main-area"><span>Description: </span>{items.recipeDescription}</div>
                                </div>
                                
                        </li>
                );
        }
}

export default PersonalRecipe;
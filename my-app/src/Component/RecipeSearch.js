import Loading from 'react-loading';
import React from "react";
import { capitalize } from 'lodash';
import PlannerList from "./PlannerList";
import "./css/PlanPage.css"
class RecipeSearch extends React.Component{
        constructor(props){
                super(props);
                this.state = {

                }
        }

        render(){
                const day = this.props.day;
                const meal = this.props.meal;
                return(
                        <div>
                                <div className='search-planning-container'>
                                        <h3 className="sub-header" >Find a meal for {capitalize(this.props.day)} {this.props.meal}</h3>
                                        {this.props.isLoading ? <Loading delay={200} type='spin' color='#222' className='loading'/>
                                        :<div className="search-planning-recipe">
                                                <input className="recipe-planning-input" type="text" placeholder="Search Recipe" onChange={this.props.onInputChange}
                                                onKeyDown = {(e) => e.key === 'Enter' && this.props.searchRecipe(e)} autoFocus/>
                                                <button className="icon-btn" onClick={this.props.searchRecipe}><i className="fa fa-arrow-right" size={30}/></button>
                                                <div style={{ float: 'right' }} onClick={this.props.closeRecipeModal}>
                                                        <button className="icon-btn" onClick={this.props.closeRecipeModal} aria-label='Close modal' style={{ width: "40px", height: "40px" }}>
                                                                <i className="fa fa-close fa-lg " style={{ font: "60px" }} autoFocus />
                                                        </button>
                                                </div>
                                        </div>  
                                        }
                                        {
                                                this.props.food && (
                                                        <PlannerList
                                                                food={this.props.food}
                                                                onSelect={(recipe) => {
                                                                        this.props.selectRecipe({recipe, day, meal});
                                                                        this.props.closeRecipeModal();
                                                                }}
                                                        />
                                                )
                                        }
                                </div>
                        </div>
                );
        }
}

export default RecipeSearch;
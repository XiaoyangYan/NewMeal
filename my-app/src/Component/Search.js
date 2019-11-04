import React from "react";
import "./css/Search.css";
import Data from "../API/Data";
import ReactLoading from 'react-loading';
import Card from "./Card";
import {Select} from "antd";
const Option = Select.Option;
class Search extends React.Component{
        constructor(props){
                super(props);
                this.state = {
                        currentDishIndex:0,
                        currentDietIndex: 0,
                        currentFood: "soup",
                        currentDiet: "high-protein",
                        currentData: [],
                        isLoading:false,
                        text:"",
                        calories:"0-200",
                }
                this.getSearchData = this.getSearchData.bind(this);
        }
        async getSearchData (e) {
                e.preventDefault();
                const diet = this.state.currentDiet.toLowerCase().trim();
                const dishType = this.state.currentFood.toLowerCase().trim();
                const queryText =  this.state.text.toLowerCase().trim();
                const calorieyType = this.state.calories;
                console.log(dishType);
                console.log(diet);
                console.log(queryText);
                console.log(calorieyType);
                this.setState({isLoading: true});
                var queryData;
                if (this.state.currentDietIndex <= 4){
                        queryData = await Data.getRecipeByDishTypeAndDiet(dishType,diet,queryText,calorieyType);
                } else {
                        queryData = await Data.getRecipeByHealthAndDiet(dishType, diet,queryText,calorieyType );
                }
                        
                this.setState({
                        currentData: queryData.data.hits,
                        isLoading: false,
                        currentFood: "soup",
                        currentDiet:"high-protein",
                        currentDietIndex:0,
                        currentDishIndex:0,
                        calories:'0-200'
                })
                console.log(this.state.currentData);
        }
        searchCategoryDiet = (e) =>{
                var _this = this;
                var ulDiet = document.getElementsByClassName("Diet");
                var liDiet = ulDiet[0].getElementsByTagName("li");
                for (var i = 0; i < liDiet.length; i++){
                        liDiet[i].className = "styled-Category";
                        liDiet[i].index = i;
                        liDiet[i].onclick = function(){
                                _this.setState({
                                        currentDietIndex: this.index,
                                });
                        }
                }
               this.setState({currentDiet: liDiet[this.state.currentDietIndex].innerText});
                liDiet[this.state.currentDietIndex].className = "styled-Category active-word";
        }
        searchCategoryFood = (e) =>{
                var _this = this;
                var ulFood = document.getElementsByClassName("Food");
                var liFood = ulFood[0].getElementsByTagName("li");
                for (var i = 0; i < liFood.length; i++){
                        liFood[i].className = "styled-Category";
                        liFood[i].index = i;
                        liFood[i].onclick = function(){
                                _this.setState({
                                        currentDishIndex: this.index,
                                });
                        }
                }
               this.setState({currentFood: liFood[this.state.currentDishIndex].innerText})
                liFood[this.state.currentDishIndex].className = "styled-Category active-word";
        }
        componentWillMount() {
                // window.addEventListener('scroll', () =>
                //   console.log(document.body.scrollTop || document.documentElement.scrollTop)
                // )
        }
        componentDidMount(){

        }
        handleAddMore = (e) => {
                document.getElementById("line-next").className = 
                        document.getElementById("line-next").className === "active" ? "displayNone":"active";
                document.getElementById("icon").className = 
                        document.getElementById("icon").className === "fa fa-plus" ? "fa fa-minus" : "fa fa-plus";
                document.getElementById("minus").innerHTML = 
                        document.getElementById("minus").innerHTML === "add more"? "get back":"add more";
        }
        handleAddMoreNext = (e) => {
                document.getElementById("line-next-2").className = 
                        document.getElementById("line-next-2").className === "active" ? "displayNone":"active";
                document.getElementById("icon-2").className = 
                        document.getElementById("icon-2").className === "fa fa-plus" ? "fa fa-minus" : "fa fa-plus";
                document.getElementById("minus-2").innerHTML = 
                        document.getElementById("minus-2").innerHTML === "add more"? "get back":"add more";
        }
        onChange = (e) => {
                this.setState({
                        [e.target.name] : e.target.value,
                })
        }
        handleChange = value =>{
                this.setState(()=>({value}));
              }
        render(){
                if (!this.state.isLoading){
                        return (
                                <>
                                        <div id="search-box">
                                                <form method="GET" action="" >
                                                        <div className="tb">
                                                                <div className="td"><input id="text" name="text" placeholder="Search Your Liked Food" autoComplete="off"
                                                                        onChange={this.onChange} value={this.state.text} required /></div>
                                                                <div className="td" id="s-cover">
                                                                        <button type="submit" onClick={this.getSearchData} className="click-search" autoFocus={false}>
                                                                                <div id="s-circle"></div>
                                                                                <span></span>
                                                                        </button>
                                                                </div>
                                                        </div>
                                                </form>
                                        </div>
                                      
                                        <div className="styled-Categories">
                                                <h6>Search category for dish type: <samp>{this.state.currentFood.toLowerCase()}</samp></h6>
                                                <ul className="styled-CategoryList Food" onClick={this.searchCategoryFood}>
                                                        <li className="styled-Category active-word" >Soup</li>
                                                        <li className="styled-Category">Salad</li>
                                                        <li className="styled-Category">Sweets</li>
                                                        <li className="styled-Category">Drink</li>
                                                        <li className="styled-Category">Cereals</li>
                                                        <li className="styled-Category">Main Course</li>
                                                        <div id="line-next" className="displayNone">
                                                                <li className="styled-Category">Condiments and Sauces</li>
                                                                <li className="styled-Category">Preps</li>
                                                                <li className="styled-Category">Preserve</li>
                                                                <li className="styled-Category">Starter</li>
                                                                <li className="styled-Category">Pancake</li>
                                                        </div>
                                                        <div className="addMore" onClick={this.handleAddMore}><i id="icon" className="fa fa-plus"></i><p id="minus">add more</p></div>
                                                </ul>
                                        </div>
                                        <div className="styled-Categories Diet">
                                                <h6>Search category for diet: <samp>{this.state.currentDiet.toLowerCase()}</samp></h6>
                                                <ul className="styled-CategoryList " onClick={this.searchCategoryDiet}>
                                                        <li className="styled-Category active-word" >High-Protein</li>
                                                        <li className="styled-Category">High-Fiber</li>
                                                        <li className="styled-Category">Low-Fat</li>
                                                        <li className="styled-Category">Low-Sodium</li>
                                                        <li className="styled-Category">Low-Carbon</li>
                                                        <div id="line-next-2" className="displayNone">
                                                                <li className="styled-Category">Vegan</li>
                                                                <li className="styled-Category">Alcohol-Free</li>
                                                                <li className="styled-Category">Vegetarian</li>
                                                                <li className="styled-Category">Low-Sugar</li>
                                                                <li className="styled-Category">kosher</li>
                                                        </div>
                                                        <div className="addMore" onClick={this.handleAddMoreNext} >
                                                                <i id="icon-2" className="fa fa-plus"></i><p id="minus-2">add more</p></div>
                                                </ul>
                                        </div>
                                        <div className="calories-select-box">
                                                <label className="calories-label">Choose Calories Standard</label>
                                                <select value={this.state.calories} onChange={this.onChange} name="calories">
                                                        <option value="0-200">0-200</option>
                                                        <option value="201-400">201-400</option>
                                                        <option value="401-600">401-600</option>
                                                        <option value="801-1200">801-1200</option>
                                                        <option value="1201">1201-INF</option>
                                                </select>
                                        </div>
                                        <div className="cardList-wrap">

                                                <ul className="cardList">
                                                        {
                                                                this.state.currentData.map((items, index) =>
                                                                        <li key={index} itemScope itemType="http://schema.org/Thing"><Card calories={items.recipe.calories} ingredientsLength={items.recipe.ingredients.length}
                                                                                backgroundImage={items.recipe.image} title={items.recipe.label} source={items.recipe.source} /></li>
                                                                )
                                                        }
                                                </ul>
                                        </div>
                                </>
                        );
                } else {
                        return <ReactLoading type={"balls"} color={"green"} height={567} width={475} className="banner-loading"/>
                }
        }
}

export default Search;